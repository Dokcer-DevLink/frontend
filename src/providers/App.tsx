import { theme } from '@/styles/theme';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Provider as ReduxProvider } from 'react-redux';
import { store } from '@/libraries/reduxToolkit';

type AppProviderProps = {
  children: React.ReactNode;
};

export const AppProvider = ({ children }: AppProviderProps) => {
  return (
    // <ReduxProvider store={store}>
    // </ReduxProvider>
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
  );
};
