import React from 'react';
import styled from '@emotion/styled';

export const ProjectGridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
`;

interface ProjectGridProps {
  children: React.ReactNode;
}

export const ProjectGrid: React.FC<ProjectGridProps> = ({ children }) => (
  <ProjectGridContainer>
    {children}
  </ProjectGridContainer>
); 