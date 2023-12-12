import { theme } from '@/styles/theme';
import React from 'react';
import { ThemeProvider } from 'styled-components';

type AppProviderProps = {
  children: React.ReactNode;
};

export const AppProvider = ({ children }: AppProviderProps) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
