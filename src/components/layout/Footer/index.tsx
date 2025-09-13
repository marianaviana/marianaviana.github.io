import React from 'react';
import styled from 'styled-components';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

const FooterContainer = styled.footer`
  background-color: ${({ theme }) => theme.colors.congressionalNavy};
  padding: ${({ theme }) => theme.spacing.xl} 0 ${({ theme }) => theme.spacing.md};
  border-top: 1px solid ${({ theme }) => theme.colors.pacificDepths};
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.spacing.md};
`;

const FooterRow = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${({ theme }) => theme.spacing.xl};
  margin-bottom: ${({ theme }) => theme.spacing.xl};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
    text-align: center;
    gap: ${({ theme }) => theme.spacing.lg};
  }
`;

const FooterColumn = styled.div``;

const FooterLogo = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.softsun};
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

const FooterMenu = styled.ul`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.sm};
`;

const MenuItem = styled.li``;

const MenuLink = styled.a`
  color: ${({ theme }) => theme.colors.cerebralGrey};
  transition: color 0.3s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.softsun};
  }
`;

const SocialIcons = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.md};
  justify-content: flex-end;

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.colors.insomnia};
    color: ${({ theme }) => theme.colors.white};
    transition: all 0.3s ease;
    border: 1px solid ${({ theme }) => theme.colors.pacificDepths};

    &:hover {
      background-color: ${({ theme }) => theme.colors.white};
      color: ${({ theme }) => theme.colors.insomnia};
      transform: translateY(-3px);
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    justify-content: center;
  }
`;

const Copyright = styled.div`
  text-align: center;
  padding-top: ${({ theme }) => theme.spacing.md};
  border-top: 1px solid ${({ theme }) => theme.colors.pacificDepths};
  color: ${({ theme }) => theme.colors.cerebralGrey};
  font-size: 0.9rem;
`;

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const menuItems = ['Sobre', 'Serviços', 'Diferenciais', 'Processos', 'Skills', 'Projetos', 'Feedbacks', 'Contato'];

  return (
    <FooterContainer>
      <FooterContent>
        <FooterRow>
          <FooterColumn>
            <FooterLogo>
              <img
                src='/images/marivianadev-logo.svg'
                alt='Mari Viana Logo'
                width={50}
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'https://placehold.co/40x40/10083a/FFFFFF/png?text=MV';
                }}
              />
            </FooterLogo>
          </FooterColumn>

          <FooterColumn>
            <FooterMenu>
              {menuItems.map((item, index) => (
                <MenuItem key={index}>
                  <MenuLink href={`#${item.toLowerCase()}`}>{item}</MenuLink>
                </MenuItem>
              ))}
            </FooterMenu>
          </FooterColumn>

          <FooterColumn>
            <SocialIcons>
              <a href='https://github.com/marianaviana' target='blank' aria-label='GitHub'>
                <FaGithub size={20} />
              </a>
              <a href='https://linkedin.com/in/marianaviana' target='blank' aria-label='LinkedIn'>
                <FaLinkedin size={20} />
              </a>
            </SocialIcons>
          </FooterColumn>
        </FooterRow>

        <Copyright>
          Orgulhosamente construído por Mari Viana © 2018 - {currentYear}
        </Copyright>
      </FooterContent>
    </FooterContainer>
  );
};