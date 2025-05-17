import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { ProjectCard } from '../components/ProjectCard';
import { ProjectGrid } from '../components/ProjectGrid';
import styled from '@emotion/styled';

const PageContainer = styled.div`
  min-height: 100vh;
  background-color: #131416;
  color: #FFFFFF;
  padding: 2rem;
  padding-top: 7rem;
`;

const UploadSection = styled.div`
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 24px;
  padding: 3rem;
  margin-bottom: 4rem;
  text-align: center;
  margin-top: 7rem;
`;

const UploadTitle = styled.h2`
  font-family: 'Press Start 2P', monospace;
  font-size: 32px;
  margin-bottom: 1.5rem;
`;

const UploadDescription = styled.p`
  font-family: 'Inter', sans-serif;
  font-size: 18px;
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 2rem;
`;

const UploadButton = styled.button`
  background: #FFFFFF;
  color: #000000;
  border: none;
  border-radius: 16px;
  padding: 16px 40px;
  font-family: 'Inter', sans-serif;
  font-size: 20px;
  font-weight: 500;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 8px;
`;

const HiddenInput = styled.input`
  display: none;
`;

const PortfolioReview = () => {
  const navigate = useNavigate();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file && file.type === 'application/pdf') {
      const newProject = {
        id: Date.now(),
        name: file.name.replace('.pdf', ''),
        file: file,
        uploadTime: new Date().toISOString(),
      };
      const reader = new FileReader();
      reader.onload = (e) => {
        const fileContent = e.target?.result;
        navigate('/portfolio-detail', {
          state: {
            project: newProject,
            file: fileContent
          }
        });
      };
      reader.onerror = (error) => {
        alert('文件读取失败，请重试');
      };
      reader.readAsDataURL(file);
    } else {
      alert('请上传 PDF 文件');
    }
  };

  const handleProjectClick = (project: { name: string; image: string }) => {
    navigate('/portfolio-detail', { state: { project, image: project.image } });
  };

  return (
    <PageContainer>
      <UploadSection>
        <UploadTitle>Upload Your Portfolio</UploadTitle>
        <UploadDescription>
          Share your design work and get personalized AI feedback to improve your portfolio
        </UploadDescription>
        <UploadButton onClick={handleUploadClick}>
          Upload Portfolio
        </UploadButton>
        <HiddenInput
          type="file"
          ref={fileInputRef}
          accept=".pdf"
          onChange={handleFileChange}
        />
      </UploadSection>
      <ProjectGrid>
        <ProjectCard
          image="/images/project1.jpg"
          title="Project 1"
          date="Edit 2 hours ago"
          onClick={() => handleProjectClick({ name: 'Project 1', image: '/images/project1.jpg' })}
        />
        <ProjectCard
          image="/images/project2.jpg"
          title="Project 2"
          date="Edit 2 hours ago"
          onClick={() => handleProjectClick({ name: 'Project 2', image: '/images/project2.jpg' })}
        />
        <ProjectCard
          image="/images/project3.jpg"
          title="Project 3"
          date="Edit 2 hours ago"
          onClick={() => handleProjectClick({ name: 'Project 3', image: '/images/project3.jpg' })}
        />
      </ProjectGrid>
    </PageContainer>
  );
};

export default PortfolioReview; 