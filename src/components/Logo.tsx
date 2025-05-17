import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

const LogoContainer = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0;
  width: fit-content;
  text-decoration: none;
  color: white;
`;

const LogoText = styled.h1`
  font-family: 'Inter', sans-serif;
  font-size: 48px;
  font-weight: 600;
  margin: 0;
  letter-spacing: -0.02em;
  line-height: 1;
  width: 100%;
  transform: scaleX(1.2);
  transform-origin: left;
`;

const LogoSubtext = styled.span`
  font-family: 'Inter', sans-serif;
  font-size: 14px;
  opacity: 0.9;
  margin-top: -2px;
  width: 100%;
  text-align: left;
`;

const Logo: React.FC = () => {
  return (
    <LogoContainer to="/">
      <LogoText>DP</LogoText>
      <LogoSubtext>DesignPilot</LogoSubtext>
    </LogoContainer>
  );
};

export default Logo; 