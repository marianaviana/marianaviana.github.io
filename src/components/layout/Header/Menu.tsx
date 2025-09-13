// src/components/layout/Header/Menu.tsx
import React from 'react';
import styled from 'styled-components';

const MenuContainer = styled.nav<{ $isOpen: boolean }>`
  display: flex;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    position: fixed;
    top: 80px;
    left: 0;
    width: 100%;
    height: calc(100vh - 80px);
    background-color: ${({ theme }) => theme.colors.congressionalNavy};
    flex-direction: column;
    justify-content: flex-start;
    padding-top: ${({ theme }) => theme.spacing.xl};
    overflow: hidden;
    transition: height 0.3s ease;
    z-index: 999;
    display: ${({ $isOpen }) => ($isOpen ? 'flex' : 'none')};;
  }
`;

const MenuList = styled.ul<{ $isOpen: boolean }>`
  display: flex;
  gap: ${({ theme }) => theme.spacing.lg};
  list-style: none;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    flex-direction: column;
    align-items: center;
    gap: ${({ theme }) => theme.spacing.xl};
    opacity: ${({ $isOpen }) => ($isOpen ? 1 : 0)};
    transition: opacity 0.3s ease 0.2s;
  }
`;

const MenuItem = styled.li``;

const MenuLink = styled.a`
  color: ${({ theme }) => theme.colors.white};
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 0;
    height: 2px;
    background-color: ${({ theme }) => theme.colors.softsun};
    transition: width 0.3s ease;
  }

  &:hover {
    color: ${({ theme }) => theme.colors.softsun};

    &::after {
      width: 100%;
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 1.2rem;
  }
`;

interface MenuProps {
  $isOpen: boolean;
}

export const Menu: React.FC<MenuProps> = ({ $isOpen }) => {
  const menuItems = ['Sobre', 'Serviços', 'Diferenciais', 'Processos', 'Skills', 'Projetos', 'Feedbacks', 'Contato'];

  const handleMenuClick = (id: string) => {
    // Fechar o menu ao clicar em um item (apenas mobile)
    if (window.innerWidth <= 768) {
      document.dispatchEvent(new CustomEvent('closeMenu'));
    }

    // Rolagem suave para a seção
    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    }, 100);
  };

  return (
    <MenuContainer $isOpen={$isOpen}>
      <MenuList $isOpen={$isOpen}>
        {menuItems.map((item, index) => {
          const id = item.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
          return (
            <MenuItem key={index}>
              <MenuLink
                href={`#${id}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleMenuClick(id);
                }}
              >
                {item}
              </MenuLink>
            </MenuItem>
          );
        })}
      </MenuList>
    </MenuContainer>
  );
};