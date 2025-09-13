import React, { useState } from 'react';
import styled from 'styled-components';
import { Button } from '../../components/common/Button';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import projectsData from '../../data/projects.json';

const ProjectsContainer = styled.section`
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
  margin-bottom: ${({ theme }) => theme.spacing.md};
  color: ${({ theme }) => theme.colors.white};
`;

const Description = styled.p`
  text-align: center;
  font-size: 1.1rem;
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  color: ${({ theme }) => theme.colors.cerebralGrey};
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.6;
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: ${({ theme }) => theme.spacing.lg};
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.spacing.md};
`;

const ProjectCard = styled.div`
  background-color: ${({ theme }) => theme.colors.congressionalNavy};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  overflow: hidden;
  border: 1px solid ${({ theme }) => theme.colors.pacificDepths};
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);

    .project-image {
      transform: scale(1.05);
    }
  }
`;

const ProjectImage = styled.div`
  height: 200px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
  }
`;

const ProjectContent = styled.div`
  padding: ${({ theme }) => theme.spacing.lg};
`;

const ProjectTitle = styled.h4`
  font-size: 1.3rem;
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  color: ${({ theme }) => theme.colors.white};
`;

const ProjectStacks = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing.xs};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`;

const Stack = styled.span`
  background-color: ${({ theme }) => theme.colors.pacificDepths};
  color: ${({ theme }) => theme.colors.white};
  padding: 2px 8px;
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  font-size: 0.8rem;
`;

const ProjectActions = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.sm};
`;

export const Projects: React.FC = () => {
  const [projects] = useState(projectsData);

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    const target = e.target as HTMLImageElement;
    target.src = 'https://placehold.co/600x400/10083a/FFFFFF/png?text=Imagem+do+Projeto';
  };

  return (
    <ProjectsContainer id='projetos'>
      <Title>Projetos</Title>
      <Subtitle>Veja aqui os principais projetos que participei!</Subtitle>
      <Description>
        Em todos os meus trabalhos eu prezo por uma entrega que corresponda a expectativa do cliente,
        tenha um código limpo, de alta qualidade e uma documentação feita nos mínimos detalhes.
      </Description>

      <ProjectsGrid>
        {projects.map((project, index) => (
          <ProjectCard key={index}>
            <ProjectImage>
              <img
                src={project.image}
                alt={project.title}
                className='project-image'
                onError={handleImageError}
              />
            </ProjectImage>

            <ProjectContent>
              <ProjectTitle>{project.title}</ProjectTitle>

              <ProjectStacks>
                {project.stacks.slice(0, 4).map((stack, i) => (
                  <Stack key={i}>{stack}</Stack>
                ))}
                {project.stacks.length > 4 && (
                  <Stack>+{project.stacks.length - 4}</Stack>
                )}
              </ProjectStacks>

              <ProjectActions>
                <Button
                  size='small'
                  variant='secondary'
                  as='a'
                  href={project.url}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <FaExternalLinkAlt /> Ver Projeto
                </Button>
              </ProjectActions>
            </ProjectContent>
          </ProjectCard>
        ))}
      </ProjectsGrid>
    </ProjectsContainer>
  );
};