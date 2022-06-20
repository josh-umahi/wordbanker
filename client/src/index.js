import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';

import "./index.css"
import { reducers } from './reducers';
import App from './App';
import { AppContextProvider } from './context/AppContext';

const store = configureStore({ reducer: reducers, })
const container = document.getElementById('root');
const root = createRoot(container);

root.render(
    <Provider store={store}>
        <AppContextProvider>
            <App />
        </AppContextProvider>
    </Provider>,
);