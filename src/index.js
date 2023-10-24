import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { CanvasContextProvider } from './components/colorpicker/CanvasContext';
import { CalenderContextProvider } from './components/calender-select/CalenderContext';
import { EventContextProvider } from './components/calender-select/EventContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CanvasContextProvider>
      <CalenderContextProvider>
        <EventContextProvider>
          <App />
      </EventContextProvider>
      </CalenderContextProvider>
    </CanvasContextProvider>
  </React.StrictMode>
);
