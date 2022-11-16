import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter,
} from 'react-router-dom';
import { Provider } from 'react-redux';
import { ThemeProvider } from '@mui/material/styles';

import theme from './theme';
import App from './App';
import { setupStore } from './store';
import './styles.css';

const store = setupStore();

ReactDOM.render(
    <Provider store={store}>
        <ThemeProvider theme={theme}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </ThemeProvider>
    </Provider>,
    document.getElementById('root')
);