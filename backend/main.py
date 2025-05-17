from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import openai
import os
import base64
import io
from PyPDF2 import PdfReader
from dotenv import load_dotenv
import json

# 加载环境变量
load_dotenv()

# 配置 OpenAI
openai.api_key = os.getenv("OPENAI_API_KEY")
OPENAI_MODEL = os.getenv("OPENAI_MODEL", "gpt-3.5-turbo")
MAX_TOKENS = int(os.getenv("MAX_TOKENS", "1000"))
TEMPERATURE = float(os.getenv("TEMPERATURE", "0.7"))

app = FastAPI()

# 配置 CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class PortfolioRequest(BaseModel):
    content: str  # Base64 编码的 PDF 内容

def extract_text_from_pdf(pdf_content: str) -> str:
    try:
        # 解码 Base64 内容
        pdf_bytes = base64.b64decode(pdf_content.split(',')[1])
        pdf_file = io.BytesIO(pdf_bytes)
        
        # 读取 PDF 文本
        reader = PdfReader(pdf_file)
        text = ""
        for page in reader.pages:
            text += page.extract_text() + "\n"
        
        return text
    except Exception as e:
        raise HTTPException(status_code=400, detail=f"PDF 解析失败: {str(e)}")

def analyze_portfolio_with_ai(text: str) -> list[str]:
    try:
        # 构建 prompt
        system_prompt = """你是一个专业的设计作品集审查专家。你需要仔细审查设计作品集的内容，并提供具体的改进建议。
        评估以下几个方面：
        1. 项目展示的完整性和逻辑性
        2. 设计过程的展示
        3. 设计决策的解释
        4. 用户研究和数据支持
        5. 视觉呈现和排版
        
        请提供 3-5 条具体的、可操作的建议。每条建议应该：
        - 指出具体的问题或改进空间
        - 解释为什么这是一个问题
        - 提供具体的改进方法
        """

        # 调用 OpenAI API
        response = openai.ChatCompletion.create(
            model=OPENAI_MODEL,
            messages=[
                {
                    "role": "system",
                    "content": system_prompt
                },
                {
                    "role": "user",
                    "content": f"请分析以下作品集内容：\n\n{text}"
                }
            ],
            temperature=TEMPERATURE,
            max_tokens=MAX_TOKENS
        )
        
        # 处理 AI 响应
        suggestions = response.choices[0].message.content.split('\n')
        # 过滤空行并清理格式
        suggestions = [s.strip() for s in suggestions if s.strip()]
        
        # 确保建议数量在合理范围内
        if len(suggestions) < 3:
            raise ValueError("AI 生成的建议数量不足")
        
        return suggestions[:5]  # 最多返回 5 条建议

    except openai.error.AuthenticationError:
        raise HTTPException(
            status_code=500,
            detail="OpenAI API 认证失败，请检查 API 密钥是否正确"
        )
    except openai.error.RateLimitError:
        raise HTTPException(
            status_code=429,
            detail="OpenAI API 调用次数已达上限，请稍后再试"
        )
    except Exception as e:
        raise HTTPException(
            status_code=500,
            detail=f"AI 分析失败: {str(e)}"
        )

@app.post("/api/analyze-portfolio")
async def analyze_portfolio(request: PortfolioRequest):
    try:
        # 提取 PDF 文本
        text = extract_text_from_pdf(request.content)
        
        # 使用 AI 分析文本
        suggestions = analyze_portfolio_with_ai(text)
        
        return {
            "success": True,
            "suggestions": suggestions
        }
    except HTTPException as e:
        raise e
    except Exception as e:
        raise HTTPException(
            status_code=500,
            detail=str(e)
        ) 