import React from 'react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';

const AppContainer = styled.div`
  background: #151515;
  min-height: 100vh;
  color: white;
  position: relative;
  overflow: hidden;
`;

const TopBarContainer = styled.div`
  position: fixed;
  top: 24px;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 4rem;
  z-index: 10;
`;

const TopBar = styled.div`
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  height: 56px;
  display: flex;
  align-items: center;
  padding: 0 2rem;
  border-radius: 16px;
`;

const BackgroundGlow = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 50%;
  height: 100vh;
  background-image: url('/images/glow.png');
  background-size: contain;
  background-position: right top;
  background-repeat: no-repeat;
  z-index: 0;
  pointer-events: none;
`;

const BackgroundGlow2 = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 50%;
  height: 100vh;
  background-image: url('/images/glow2.png');
  background-size: contain;
  background-position: left bottom;
  background-repeat: no-repeat;
  z-index: 0;
  pointer-events: none;
`;

const Content = styled.div`
  position: relative;
  z-index: 1;
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 4rem;
  padding-bottom: 8rem;
`;

const Logo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0;
  width: fit-content;
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

const Nav = styled.nav`
  display: flex;
  gap: 2rem;
  font-family: 'Inter', sans-serif;
  font-size: 16px;
  align-items: center;
`;

const SignInButton = styled(motion.button)`
  background: #FFFFFF;
  color: #000000;
  border: none;
  border-radius: 12px;
  padding: 8px 24px;
  font-family: 'Inter', sans-serif;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
`;

const Section = styled.section`
  text-align: center;
  margin-bottom: 16rem;
  margin-top: 20rem;
`;

const SectionTitle = styled.h2`
  font-family: 'Press Start 2P', monospace;
  font-size: 48px;
  font-weight: 400;
  margin-bottom: 4rem;
  letter-spacing: -0.02em;
  line-height: 1.3;
  transform: scaleX(0.75);
`;

const StepsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 4rem;
  margin: 0 auto;
  max-width: 1200px;
`;

const Step = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
`;

const StepNumber = styled.div`
  font-family: 'Inter', sans-serif;
  font-size: 24px;
  font-weight: 500;
  margin-bottom: 1rem;
`;

const StepIcon = styled.div`
  width: 64px;
  height: 64px;
  margin-bottom: 1.5rem;

  img {
    width: 100%;
    height: 100%;
  }
`;

const StepTitle = styled.h3`
  font-family: 'Inter', sans-serif;
  font-size: 32px;
  font-weight: 500;
  margin-bottom: 1rem;
`;

const StepDescription = styled.p`
  font-family: 'Inter', sans-serif;
  font-size: 18px;
  line-height: 1.6;
  opacity: 0.9;
  max-width: 300px;
  margin: 0 auto;
`;

const Features = styled.section`
  text-align: center;
  margin-top: 16rem;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
`;

const FeatureTitle = styled.h2`
  font-family: 'Press Start 2P', monospace;
  font-size: 48px;
  font-weight: 400;
  margin-bottom: 4rem;
  letter-spacing: -0.02em;
  line-height: 1.3;
  transform: scaleX(0.75);
`;

const FeatureCard = styled.div`
  text-align: center;
  margin-bottom: 8rem;
  max-width: 1000px;
  margin-left: auto;
  margin-right: auto;
  padding: 0 2rem;
  position: relative;

  &:last-child {
    margin-bottom: 0;
  }
`;

const FeatureHeading = styled.h3`
  font-family: 'Press Start 2P', monospace;
  font-size: 32px;
  font-weight: 400;
  margin-bottom: 2rem;
  letter-spacing: -0.02em;
  line-height: 1.3;
  text-align: center;
  transform: scaleX(0.75);
  transform-origin: center;
  width: 100%;
  white-space: normal;
  padding: 0 2rem;
`;

const FeatureDescription = styled.p`
  font-family: 'Inter', sans-serif;
  font-size: 24px;
  line-height: 1.6;
  opacity: 0.9;
  max-width: 800px;
  margin: 0 auto 2rem;
`;

const Button = styled(motion.button)`
  background: #FFFFFF;
  color: #000000;
  border: none;
  border-radius: 16px;
  padding: 16px 40px;
  font-family: 'Inter', sans-serif;
  font-size: 24px;
  font-weight: 500;
  cursor: pointer;
`;

const Hero = styled.section`
  max-width: 800px;
  padding-top: 280px;
  margin-bottom: 20rem;
`;

const HeroTitle = styled.h1`
  font-family: 'Press Start 2P', monospace;
  font-size: 56px;
  font-weight: 400;
  margin-bottom: 2rem;
  letter-spacing: -0.02em;
  line-height: 1.2;
  text-align: left;
  transform: scaleX(0.75);
  transform-origin: left;
  max-width: 800px;
  white-space: pre-line;
`;

const HeroDescription = styled.p`
  font-family: 'Inter', sans-serif;
  font-size: 24px;
  line-height: 1.5;
  opacity: 0.9;
  margin-bottom: 3rem;
  text-align: left;
`;

const GetStartedButton = styled(motion.button)`
  background: #FFFFFF;
  color: #000000;
  border: none;
  border-radius: 16px;
  padding: 16px 40px;
  font-family: 'Inter', sans-serif;
  font-size: 24px;
  font-weight: 500;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 8px;

  &::after {
    content: '→';
    font-size: 24px;
  }
`;

function App() {
  return (
    <AppContainer>
      <BackgroundGlow />
      <BackgroundGlow2 />
      <TopBarContainer>
        <Logo>
          <LogoText>DP</LogoText>
          <LogoSubtext>DesignPilot</LogoSubtext>
        </Logo>
        <TopBar>
          <Nav>
            <a href="#portfolio-review">Portfolio Review</a>
            <a href="#mock-interview">Mock Interview</a>
            <a href="#audio-summary">Audio Summary</a>
          </Nav>
        </TopBar>
        <SignInButton
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Sign In
        </SignInButton>
      </TopBarContainer>
      <Content>
        <Hero>
          <HeroTitle>
            Smarter design career prep,
            built for creatives.
          </HeroTitle>
          <HeroDescription>
            DesignPilot helps you refine your portfolio, review real feedback, and train for interviews — all in one place.
          </HeroDescription>
          <GetStartedButton
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Started
          </GetStartedButton>
        </Hero>

        <Section>
          <SectionTitle>How does it work?</SectionTitle>
          <StepsContainer>
            <Step>
              <StepNumber>Step1</StepNumber>
              <StepIcon>
                <img src="/icons/upload.svg" alt="Upload" />
              </StepIcon>
              <StepTitle>Upload</StepTitle>
              <StepDescription>
                Submit your resume, portfolio, and (optional) audio feedback to get started.
              </StepDescription>
            </Step>
            <Step>
              <StepNumber>Step2</StepNumber>
              <StepIcon>
                <img src="/icons/review.svg" alt="Review" />
              </StepIcon>
              <StepTitle>Review</StepTitle>
              <StepDescription>
                Let AI analyze your content and generate insights, feedback, and mock interview questions.
              </StepDescription>
            </Step>
            <Step>
              <StepNumber>Step3</StepNumber>
              <StepIcon>
                <img src="/icons/iterate.svg" alt="Iterate" />
              </StepIcon>
              <StepTitle>Iterate</StepTitle>
              <StepDescription>
                Use the suggestions to polish your work and practice for your next big opportunity.
              </StepDescription>
            </Step>
          </StepsContainer>
        </Section>

        <Features>
          <FeatureTitle>What will you gain?</FeatureTitle>
          <FeatureCard>
            <FeatureHeading>Refine your portfolio with AI insight</FeatureHeading>
            <FeatureDescription>
              Upload your work and get smart suggestions to improve each project.
              Identify weak points, enhance storytelling, and align with industry expectations.
            </FeatureDescription>
            <Button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Upload Portfolio
            </Button>
          </FeatureCard>
          <FeatureCard>
            <FeatureHeading>Train with personalized interview questions</FeatureHeading>
            <FeatureDescription>
              AI generates mock interview questions tailored to your background and portfolio.
              Practice with real-world prompts and feel confident in your next interview.
            </FeatureDescription>
            <Button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Start Mock Interview
            </Button>
          </FeatureCard>
          <FeatureCard>
            <FeatureHeading>Turn feedback recordings into action plans</FeatureHeading>
            <FeatureDescription>
              Upload audio from mentor reviews or mock interviews.
              AI will extract key suggestions and map them to the right portfolio sections.
            </FeatureDescription>
            <Button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Upload Audio
            </Button>
          </FeatureCard>
        </Features>
      </Content>
    </AppContainer>
  );
}

export default App;
