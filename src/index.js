import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { CanvasContextProvider } from './components/CanvasContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CanvasContextProvider>
      <App />
    </CanvasContextProvider>
  </React.StrictMode>
);
