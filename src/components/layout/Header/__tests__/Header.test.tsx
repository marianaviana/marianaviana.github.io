import React from 'react';
import { render, screen } from '@testing-library/react';
import { Header } from '../index';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../../../styles/theme';

describe('Header Component', () => {
test('renders header with logo image', () => {
  render(
    <ThemeProvider theme={theme}>
      <Header />
    </ThemeProvider>
  );
  expect(screen.getByAltText('Mari Viana Logo')).toBeInTheDocument();
});

  test('header contains navigation', () => {
    render(
      <ThemeProvider theme={theme}>
        <Header />
      </ThemeProvider>
    );
    expect(screen.getByRole('navigation')).toBeInTheDocument();
  });
});