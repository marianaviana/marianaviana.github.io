import React, { useState } from 'react';
import styled from 'styled-components';
import {
  FaHtml5, FaCss3Alt, FaSass, FaJs, FaReact, FaGit, FaBootstrap,
  FaFigma, FaGithub, FaGitlab, FaSlack, FaTrello, FaDiscord, FaRocketchat, FaNpm, FaUbuntu, FaBitbucket
} from 'react-icons/fa';
import {
  SiAdobephotoshop, SiLighthouse, SiStyledcomponents, SiTailwindcss,
  SiTypescript, SiWebpack, SiInsomnia, SiElectron, SiMattermost
} from 'react-icons/si';
import { VscVscode } from 'react-icons/vsc';
import { TbApi } from "react-icons/tb";

const SkillsContainer = styled.section`
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

const Description = styled.p`
  text-align: center;
  font-size: 1.1rem;
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  color: ${({ theme }) => theme.colors.white};
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.6;
`;

const ToggleContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  background-color: ${({ theme }) => theme.colors.insomnia};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  max-width: 300px;
  margin-left: auto;
  margin-right: auto;
  border: 1px solid ${({ theme }) => theme.colors.pacificDepths};
`;

const ToggleButton = styled.button<{ active: boolean }>`
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.lg};
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  border: none;
  background-color: ${({ active, theme }) =>
    active ? theme.colors.softsun : 'transparent'};
  color: ${({ active, theme }) =>
    active ? theme.colors.insomnia : theme.colors.cerebralGrey};
  font-weight: ${({ active }) => active ? '600' : '400'};
  cursor: pointer;
  transition: all 0.3s ease;
  width: 100%;

  &:hover {
    background-color: ${({ active, theme }) =>
    !active ? 'rgba(32, 175, 15, 0.1)' : theme.colors.softsun};
  }
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  gap: ${({ theme }) => theme.spacing.lg};
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.spacing.md};
`;

const SkillItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${({ theme }) => theme.spacing.md};
  background-color: ${({ theme }) => theme.colors.insomnia};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  border: 1px solid ${({ theme }) => theme.colors.pacificDepths};
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);

    .skill-icon {
      transform: scale(1.1);
      color: ${({ theme }) => theme.colors.softsun};
    }
  }
`;

const SkillIcon = styled.div`
  font-size: 3rem;
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  color: ${({ theme }) => theme.colors.cerebralGrey};
  transition: all 0.3s ease;
`;

const SkillName = styled.span`
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.cerebralGrey};
  text-align: center;
`;

export const Skills: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'skills' | 'tools'>('skills');

  const skills = [
    { name: 'HTML5', icon: <FaHtml5 /> },
    { name: 'CSS3', icon: <FaCss3Alt /> },
    { name: 'SASS', icon: <FaSass /> },
    { name: 'JavaScript', icon: <FaJs /> },
    { name: 'TypeScript', icon: <SiTypescript /> },
    { name: 'React', icon: <FaReact /> },
    { name: 'APIs REST', icon: <TbApi /> },
    { name: 'Styled Components', icon: <SiStyledcomponents /> },
    { name: 'Bootstrap', icon: <FaBootstrap /> },
    { name: 'Tailwind CSS', icon: <SiTailwindcss /> },
    { name: 'Electron.js', icon: <SiElectron /> },
    { name: 'Git', icon: <FaGit /> },
  ];

  const tools = [
    { name: 'VSCode', icon: <VscVscode /> },
    { name: 'Figma', icon: <FaFigma /> },
    { name: 'Photoshop', icon: <SiAdobephotoshop /> },
    { name: 'GitHub', icon: <FaGithub /> },
    { name: 'GitLab', icon: <FaGitlab /> },
    { name: 'Bitbucket', icon: <FaBitbucket /> },
    { name: 'Slack', icon: <FaSlack /> },
    { name: 'Trello', icon: <FaTrello /> },
    { name: 'Discord', icon: <FaDiscord /> },
    { name: 'Mattermost', icon: <SiMattermost />},
    { name: 'Rocketchat', icon: <FaRocketchat /> },
    { name: 'NPM', icon: <FaNpm /> },
    { name: 'Webpack', icon: <SiWebpack /> },
    { name: 'Ubuntu', icon: <FaUbuntu /> },
    { name: 'Insomnia ', icon: <SiInsomnia /> },
    { name: 'Lighthouse', icon: <SiLighthouse /> },
  ];

  return (
    <SkillsContainer id='skills'>
      <Title>Skills e Ferramentas</Title>
      <Description>
        Eu desenvolvo soluções de qualidade com foco no front-end tanto para desktop
        quanto para mobile utilizando as seguintes tecnologias e ferramentas.
      </Description>

      <ToggleContainer>
        <ToggleButton
          active={activeTab === 'skills'}
          onClick={() => setActiveTab('skills')}
        >
          Skills
        </ToggleButton>
        <ToggleButton
          active={activeTab === 'tools'}
          onClick={() => setActiveTab('tools')}
        >
          Tools
        </ToggleButton>
      </ToggleContainer>

      <SkillsGrid>
        {(activeTab === 'skills' ? skills : tools).map((item, index) => (
          <SkillItem key={index}>
            <SkillIcon className='skill-icon'>
              {item.icon}
            </SkillIcon>
            <SkillName>{item.name}</SkillName>
          </SkillItem>
        ))}
      </SkillsGrid>
    </SkillsContainer>
  );
};