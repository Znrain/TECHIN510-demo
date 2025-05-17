import axios from 'axios';

interface AIAnalysisResponse {
  suggestions: string[];
  error?: string;
}

export const analyzePortfolio = async (pdfContent: string): Promise<AIAnalysisResponse> => {
  try {
    const response = await axios.post('http://localhost:8000/api/analyze-portfolio', {
      content: pdfContent
    }, {
      headers: {
        'Content-Type': 'application/json'
      }
    });

    return response.data;
  } catch (error) {
    console.error('AI分析失败:', error);
    return {
      suggestions: [],
      error: '分析过程中出现错误，请稍后重试'
    };
  }
}; 