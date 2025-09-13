import React from 'react';
import styled from 'styled-components';
import { FaCheckCircle } from 'react-icons/fa';

const DifferentialsContainer = styled.section`
  padding: ${({ theme }) => theme.spacing.xl} 0;
  background-color: ${({ theme }) => theme.colors.congressionalNavy};
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

const ListContainer = styled.ul`
  max-width: 800px;
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.spacing.md};
`;

const ListItem = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  padding: ${({ theme }) => theme.spacing.md};
  background-color: ${({ theme }) => theme.colors.insomnia};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  border: 1px solid ${({ theme }) => theme.colors.pacificDepths};
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateX(10px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  }

  &:last-child {
    margin-bottom: 0;
  }
`;

const Icon = styled.div`
  color: ${({ theme }) => theme.colors.softsun};
  font-size: 1.5rem;
  margin-right: ${({ theme }) => theme.spacing.md};
  flex-shrink: 0;
`;

const Text = styled.p`
  color: ${({ theme }) => theme.colors.cerebralGrey};
  font-size: 1.1rem;
`;

export const Differentials: React.FC = () => {
  const differentials = [
    'Design de alta conversão',
    'Carregamento rápido',
    'Layout responsivo',
    'Guia de estilo do projeto',
    'Documento de entrega'
  ];

  return (
    <DifferentialsContainer id='diferenciais'>
      <Title>DIFERENCIAIS</Title>
      <Subtitle>O que entrego?</Subtitle>

      <ListContainer>
        {differentials.map((item, index) => (
          <ListItem key={index}>
            <Icon>
              <FaCheckCircle />
            </Icon>
            <Text>{item}</Text>
          </ListItem>
        ))}
      </ListContainer>
    </DifferentialsContainer>
  );
};