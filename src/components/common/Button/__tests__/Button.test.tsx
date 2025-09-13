import React from 'react';
import { render, screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../../../styles/theme';
import { Button } from '../index';

describe('Button Component', () => {
  test('renders button with text', () => {
    render(
      <ThemeProvider theme={theme}>
        <Button>Click me</Button>
      </ThemeProvider>
    );
    expect(screen.getByText('Click me')).toBeInTheDocument();
  });

  test('renders button with primary variant', () => {
    render(
      <ThemeProvider theme={theme}>
        <Button variant="primary">Primary Button</Button>
      </ThemeProvider>
    );
    expect(screen.getByText('Primary Button')).toBeInTheDocument();
  });
});