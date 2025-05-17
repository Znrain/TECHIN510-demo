import React from 'react';
import styled from '@emotion/styled';

export const ProjectCardContainer = styled.div`
  background: rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.2s;
  &:hover {
    transform: translateY(-4px);
  }
`;

export const ProjectImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

export const ProjectInfo = styled.div`
  padding: 1.5rem;
`;

export const ProjectTitle = styled.h4`
  font-family: 'Inter', sans-serif;
  font-size: 18px;
  margin-bottom: 0.5rem;
`;

export const ProjectDate = styled.span`
  font-family: 'Inter', sans-serif;
  font-size: 14px;
  color: rgba(255, 255, 255, 0.6);
`;

interface ProjectCardProps {
  image: string;
  title: string;
  date: string;
  onClick?: () => void;
  children?: React.ReactNode;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ image, title, date, onClick, children }) => (
  <ProjectCardContainer onClick={onClick}>
    <ProjectImage src={image} alt={title} />
    <ProjectInfo>
      <ProjectTitle>{title}</ProjectTitle>
      <ProjectDate>{date}</ProjectDate>
      {children}
    </ProjectInfo>
  </ProjectCardContainer>
); 