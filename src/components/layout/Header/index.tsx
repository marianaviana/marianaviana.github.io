// src/components/layout/Header/index.tsx
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Menu } from './Menu';

const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-image: linear-gradient(180deg, #08022C 0%, #13094E 100%);
  backdrop-filter: blur(10px);
  z-index: 1000;
  padding: ${({ theme }) => theme.spacing.md} 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.pacificDepths};
`;

const HeaderContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.spacing.md};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.a`
  width: 50px;
  height: 50px;
  z-index: 1001;
`;

const MobileMenuButton = styled.button<{ isOpen: boolean }>`
  display: none;
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.white};
  font-size: 1.5rem;
  z-index: 1001;
  transition: color 0.3s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.softsun};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    display: block;
  }
`;

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  useEffect(() => {
    const handleCloseMenu = () => closeMenu();
    const handleResize = () => {
      if (window.innerWidth > 768) {
        closeMenu();
      }
    };

    document.addEventListener('closeMenu', handleCloseMenu);
    window.addEventListener('resize', handleResize);

    return () => {
      document.removeEventListener('closeMenu', handleCloseMenu);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <HeaderContainer>
      <HeaderContent>
        <Logo href='#home'>
          <img
            src='/images/marivianadev-logo.svg'
            alt='Mari Viana Logo'
            width={50}
            onError={(e) => {
              (e.target as HTMLImageElement).src = 'https://placehold.co/50x50/10083a/FFFFFF/png?text=MV';
            }}
          />
        </Logo>

        <Menu isOpen={isMenuOpen} />

        <MobileMenuButton
          isOpen={isMenuOpen}
          onClick={toggleMenu}
          aria-label={isMenuOpen ? 'Fechar menu' : 'Abrir menu'}
        >
          {isMenuOpen ? '✕' : '☰'}
        </MobileMenuButton>
      </HeaderContent>
    </HeaderContainer>
  );
};