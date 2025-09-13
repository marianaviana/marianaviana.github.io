import React from 'react';
import styled from 'styled-components';
import { FaCode, FaChartLine, FaPalette } from 'react-icons/fa';

const ServicesContainer = styled.section`
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

const Subtitle = styled.p`
  text-align: center;
  font-size: 1.2rem;
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  color: ${({ theme }) => theme.colors.white};
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`;

const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: ${({ theme }) => theme.spacing.lg};
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.spacing.md};
`;

const Card = styled.div`
  background-color: ${({ theme }) => theme.colors.congressionalNavy};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  padding: ${({ theme }) => theme.spacing.xl};
  text-align: center;
  border: 1px solid ${({ theme }) => theme.colors.pacificDepths};
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);

    .icon {
      transform: scale(1.1);
      color: ${({ theme }) => theme.colors.softsun};
    }
  }
`;

const Icon = styled.div`
  font-size: 3rem;
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  color: ${({ theme }) => theme.colors.pacificDepths};
  transition: all 0.3s ease;
`;

const CardTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: ${({ theme }) => theme.spacing.md};
  color: ${({ theme }) => theme.colors.white};
`;

const CardDescription = styled.p`
  color: ${({ theme }) => theme.colors.cerebralGrey};
  line-height: 1.6;
`;

export const Services: React.FC = () => {
  const services = [
    {
      icon: <FaCode />,
      title: 'Desenvolvimento',
      description: 'Desenvolvo interfaces web, utilizando as tecnologias mais modernas disponíveis no mercado.'
    },
    {
      icon: <FaChartLine />,
      title: 'Estratégia Digital',
      description: 'Planejo e auxilio na execução de estratégias digitais para seu negócio, buscando aumentar os seus resultados.'
    },
    {
      icon: <FaPalette />,
      title: 'UI/UX Design',
      description: 'Desenho interfaces visuais, modernas e atrativas, visando gerar a melhor experiência aos usuários.'
    }
  ];

  return (
    <ServicesContainer id='servicos'>
      <Title>O que faço?</Title>
      <Subtitle>Ofereço soluções completas em desenvolvimento front-end e design</Subtitle>

      <CardsContainer>
        {services.map((service, index) => (
          <Card key={index}>
            <Icon className='icon'>{service.icon}</Icon>
            <CardTitle>{service.title}</CardTitle>
            <CardDescription>{service.description}</CardDescription>
          </Card>
        ))}
      </CardsContainer>
    </ServicesContainer>
  );
};