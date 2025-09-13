import React from 'react';
import styled from 'styled-components';

const AboutContainer = styled.section`
  padding: ${({ theme }) => theme.spacing.xl} 0;
  background-color: ${({ theme }) => theme.colors.congressionalNavy};
  background-image: radial-gradient(hsla(210, 20%, 98%, 0.02) 1px, transparent 0);
  background-size: 7px 7px;
`;

const Content = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.spacing.md};
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xl};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex-direction: column;
    text-align: center;
  }
`;

const ImageContainer = styled.div`
  flex: 1;

  img {
    width: 100%;
    max-width: 400px;
    border-radius: ${({ theme }) => theme.borderRadius.lg};
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
    transition: transform 0.3s ease;

    &:hover {
      transform: scale(1.02);
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    order: -1;
  }
`;

const TextContainer = styled.div`
  flex: 2;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  color: ${({ theme }) => theme.colors.white};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 2rem;
  }
`;

const Description = styled.p`
  font-size: 1.1rem;
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  color: ${({ theme }) => theme.colors.cerebralGrey};
  line-height: 1.8;
`;

const StatsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${({ theme }) => theme.spacing.md};
  margin-top: ${({ theme }) => theme.spacing.xl};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`;

const StatItem = styled.div`
  text-align: center;
  padding: ${({ theme }) => theme.spacing.md};
  background-color: ${({ theme }) => theme.colors.insomnia};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  border: 1px solid ${({ theme }) => theme.colors.pacificDepths};
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  }
`;

const StatNumber = styled.div`
  font-size: 2rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.pacificDepths};
  margin-bottom: ${({ theme }) => theme.spacing.xs};
`;

const StatLabel = styled.div`
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.cerebralGrey};
`;

export const About: React.FC = () => {
  return (
    <AboutContainer id='sobre'>
      <Content>
        <TextContainer>
          <Title>Sobre Mim</Title>

          <Description>
            Atualmente foco meu trabalho no desenvolvimento front-end de sistemas por meio de
            análises e criação de funcionalidades para Interface Gráfica do Usuário (GUI) ricas em UX Design.
          </Description>

          <StatsContainer>
            <StatItem>
              <StatNumber>7+</StatNumber>
              <StatLabel>Anos de Experiência</StatLabel>
            </StatItem>

            <StatItem>
              <StatNumber>12320+</StatNumber>
              <StatLabel>Horas Trabalhadas</StatLabel>
            </StatItem>

            <StatItem>
              <StatNumber>7+</StatNumber>
              <StatLabel>Empresas Satisfeitas</StatLabel>
            </StatItem>
          </StatsContainer>
        </TextContainer>

        <ImageContainer>
          <img
            src='/images/about/mari-dev.jpeg'
            alt='Sobre Mari Viana'
            onError={(e) => {
              (e.target as HTMLImageElement).src = 'https://placehold.co/400x500/10083a/FFFFFF/png?text=Sobre+Mari+Viana';
            }}
          />
        </ImageContainer>
      </Content>
    </AboutContainer>
  );
};