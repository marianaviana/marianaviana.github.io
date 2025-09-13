// src/components/common/Button/__tests__/Button.test.tsx
import React from 'react';
import { render, screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../../../styles/theme';
import { Button } from '../index';

describe('Button Component', () => {
  test('renders button with correct text', () => {
    render(
      <ThemeProvider theme={theme}>
        <Button>Click me</Button>
      </ThemeProvider>
    );

    expect(screen.getByText('Click me')).toBeInTheDocument();
  });

  test('applies primary variant styles', () => {
    render(
      <ThemeProvider theme={theme}>
        <Button variant='primary'>Primary Button</Button>
      </ThemeProvider>
    );

    const button = screen.getByText('Primary Button');
    expect(button).toHaveStyle(`background-color: ${theme.colors.softsun}`);
  });
});