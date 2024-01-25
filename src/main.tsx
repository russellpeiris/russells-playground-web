import { BASE_URL } from './configs/appConfig.ts';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import axios from 'axios';
import React from 'react';
import './index.css';

axios.defaults.baseURL = BASE_URL;
axios.defaults.timeout = 30000;

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
