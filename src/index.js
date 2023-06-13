import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom';
import {HelmetProvider} from 'react-helmet-async';
import './index.css';
import './constants/colors.css';
import App from './App';
import ContextProvider from './store/context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <ContextProvider>
      <HelmetProvider>
        <App />
      </HelmetProvider>
    </ContextProvider>
  </BrowserRouter>
);
