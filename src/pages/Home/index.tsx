import React from 'react';
import styled, { keyframes } from 'styled-components';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const HomeContainer = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding: 80px ${({ theme }) => theme.spacing.md} 0;
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  overflow: hidden;
  background-image: radial-gradient(hsla(210, 20%, 98%, 0.02) 1px, transparent 0);
  background-size: 7px 7px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    min-height: initial;
    flex-direction: column;
    text-align: center;
    padding-top: 150px
  }
`;

const Content = styled.div`
  flex: 1;
  animation: ${fadeIn} 1s ease-out;
`;

const Title = styled.h1`
  font-size: 3.5rem;
  margin-bottom: ${({ theme }) => theme.spacing.md};
  color: ${({ theme }) => theme.colors.white};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 2.5rem;
  }
`;

const Subtitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  color: ${({ theme }) => theme.colors.white};
  font-weight: 400;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 1.2rem;
  }
`;

const Description = styled.p`
  font-size: 1.1rem;
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  color: ${({ theme }) => theme.colors.cerebralGrey};
  max-width: 600px;
  line-height: 1.8;
`;

const SocialIcons = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.md};
  margin-bottom: ${({ theme }) => theme.spacing.xl};

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.colors.congressionalNavy};
    color: ${({ theme }) => theme.colors.white};
    transition: all 0.3s ease;
    border: 1px solid ${({ theme }) => theme.colors.pacificDepths};

    &:hover {
      background-color: ${({ theme }) => theme.colors.softsun};
      color: ${({ theme }) => theme.colors.insomnia};
      transform: translateY(-3px);
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    justify-content: center;
  }
`;

const ImageContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${fadeIn} 1s ease-out 0.5s both;
  margin-top: ${({ theme }) => theme.spacing.xl};

  img {
    max-width: 400px;
    height: auto;
    border-radius: ${({ theme }) => theme.borderRadius.lg};
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
    transition: transform 0.3s ease;

    &:hover {
      transform: scale(1.05);
    }
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: none;
  }
  }
`;

export const Home: React.FC = () => {
  return (
    <HomeContainer id='home'>
      <Content>
        <Title>Olá, eu sou a <span>Mari</span>,</Title>
        <Subtitle>Desenvolvedora Front-end e UX/UI Designer</Subtitle>
        <Description>
          Escrevo códigos para máquinas e palavras para pessoas. Está esperando o que?
          Me segue, eu tenho um plano!
        </Description>
        <SocialIcons>
          <a href='https://github.com/marianaviana' target='blank' aria-label='GitHub'>
            <FaGithub size={24} />
          </a>
          <a href='https://linkedin.com/in/marianaviana' target='blank'  aria-label='LinkedIn'>
            <FaLinkedin size={24} />
          </a>
        </SocialIcons>
      </Content>

      <ImageContainer>
        <img
          src='/images/about/mari-escritorio.jpg'
          alt='Desenvolvimento Front-end'
          onError={(e) => {
            (e.target as HTMLImageElement).src = 'https://placehold.co/600x400/10083a/FFFFFF/png?text=Desenvolvimento+Front-end';
          }}
        />
      </ImageContainer>
    </HomeContainer>
  );
};