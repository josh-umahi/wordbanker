import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import "./index.css"
import { reducers } from './reducers';
import App from './App';
import { UserInterfaceProvider } from './context/AppContext';

const store = createStore(reducers, compose(applyMiddleware(thunk)));
const container = document.getElementById('root');
const root = createRoot(container);

root.render(
    <Provider store={store}>
        <UserInterfaceProvider>
            <App />
        </UserInterfaceProvider>
    </Provider>,
);