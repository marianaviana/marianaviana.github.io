import React from 'react';
import styled from 'styled-components';
import { FaSearch, FaPaintBrush, FaCode, FaRocket } from 'react-icons/fa';

const ProcessContainer = styled.section`
  padding: ${({ theme }) => theme.spacing.xl} 0;
  background-image: radial-gradient(hsla(210, 20%, 98%, 0.02) 1px, transparent 0);
  background-size: 7px 7px;
`;

const Title = styled.h2`
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: ${({ theme }) => theme.spacing.md};
  color: ${({ theme }) => theme.colors.white};
`;

const Subtitle = styled.h3`
  text-align: center;
  font-size: 1.5rem;
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  color: ${({ theme }) => theme.colors.white};
`;

const StepsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: ${({ theme }) => theme.spacing.lg};
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.spacing.md};
`;

const Step = styled.div`
  text-align: center;
  padding: ${({ theme }) => theme.spacing.xl} ${({ theme }) => theme.spacing.lg};
  background-color: ${({ theme }) => theme.colors.congressionalNavy};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  border: 1px solid ${({ theme }) => theme.colors.pacificDepths};
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  position: relative;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
  }

  &::before {
    content: attr(data-step);
    position: absolute;
    top: -15px;
    left: 50%;
    transform: translateX(-50%);
    width: 30px;
    height: 30px;
    background-color: ${({ theme }) => theme.colors.softsun};
    color: ${({ theme }) => theme.colors.insomnia};
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
  }
`;

const StepIcon = styled.div`
  font-size: 3rem;
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  color: ${({ theme }) => theme.colors.white};
`;

const StepTitle = styled.h4`
  font-size: 1.5rem;
  margin-bottom: ${({ theme }) => theme.spacing.md};
  color: ${({ theme }) => theme.colors.white};
`;

const StepDescription = styled.p`
  color: ${({ theme }) => theme.colors.cerebralGrey};
  line-height: 1.6;
`;

export const Process: React.FC = () => {
  const steps = [
    {
      step: '1',
      icon: <FaSearch />,
      title: 'Descoberta',
      description: 'Etapa de entendimento e planejamento do projeto.'
    },
    {
      step: '2',
      icon: <FaPaintBrush />,
      title: 'Design',
      description: 'Etapa de criação do design do projeto.'
    },
    {
      step: '3',
      icon: <FaCode />,
      title: 'Desenvolvimento',
      description: 'Etapa de implementação do design do projeto.'
    },
    {
      step: '4',
      icon: <FaRocket />,
      title: 'Entrega',
      description: 'Etapa de testes e entrega do projeto ao cliente.'
    }
  ];

  return (
    <ProcessContainer id='processos'>
      <Title>Processos</Title>
      <Subtitle>Qual o passo a passo?</Subtitle>

      <StepsContainer>
        {steps.map((step, index) => (
          <Step key={index} data-step={step.step}>
            <StepIcon>{step.icon}</StepIcon>
            <StepTitle>{step.title}</StepTitle>
            <StepDescription>{step.description}</StepDescription>
          </Step>
        ))}
      </StepsContainer>
    </ProcessContainer>
  );
};