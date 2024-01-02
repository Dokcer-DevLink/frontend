import { theme } from '@/styles/theme';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Provider as ReduxProvider } from 'react-redux';
import { store } from '@/libraries/reduxToolkit';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';
import { axios, axiosRequestInterceptor } from '@/libraries/axios';

type AppProviderProps = {
  children: React.ReactNode;
};

export const AppProvider = ({ children }: AppProviderProps) => {
  const persistor = persistStore(store);
  axios.interceptors.request.use(axiosRequestInterceptor);

  return (
    <ReduxProvider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      </PersistGate>
    </ReduxProvider>
  );
};
