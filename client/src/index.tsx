import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { configureStore } from '@reduxjs/toolkit';

import './index.css';
import { reducers } from './reducers';
import App from './App';
import { AppContextProvider } from './context/AppContext';

const store = configureStore({ reducer: reducers });
const container = document.getElementById('root') as HTMLElement;
const root = createRoot(container);
const queryClient = new QueryClient();

root.render(
  <QueryClientProvider client={queryClient}>
    <Provider store={store}>
      <AppContextProvider>
        <App />
      </AppContextProvider>
    </Provider>
    <ReactQueryDevtools />
  </QueryClientProvider>
);
