import styled from 'styled-components';

interface ButtonProps {
  variant?: 'primary' | 'secondary';
  size?: 'small' | 'medium' | 'large';
}

export const Button = styled.button<ButtonProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.sm};
  padding: ${({ size, theme }) => {
    switch (size) {
      case 'small':
        return `${theme.spacing.xs} ${theme.spacing.sm}`;
      case 'large':
        return `${theme.spacing.md} ${theme.spacing.lg}`;
      default:
        return `${theme.spacing.sm} ${theme.spacing.md}`;
    }
  }};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  border: 2px solid transparent;
  font-weight: 600;
  transition: all 0.3s ease;
  cursor: pointer;

  ${({ variant, theme }) => {
    switch (variant) {
      case 'secondary':
        return `
          background-color: transparent;
          border-color: ${theme.colors.white};
          color: ${theme.colors.white};

          &:hover {
            background-color: ${theme.colors.white};
            color: ${theme.colors.insomnia};
          }
        `;
      default:
        return `
          background-color: ${theme.colors.whatsapp};
          color: ${theme.colors.insomnia};

          &:hover {
            background-color: transparent;
            border-color: ${theme.colors.whatsapp};
            color: ${theme.colors.whatsapp};
          }
        `;
    }
  }}

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;