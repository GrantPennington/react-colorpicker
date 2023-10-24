import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { CanvasContextProvider } from './components/colorpicker/CanvasContext';
import { CalenderContextProvider } from './components/calender-select/CalenderContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CanvasContextProvider>
      <CalenderContextProvider>
      <App />
      </CalenderContextProvider>
    </CanvasContextProvider>
  </React.StrictMode>
);
