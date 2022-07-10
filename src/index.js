import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import './index.css';
import App from './components/App';
import { FeedbackProvider } from './context/FeedbackContext';

const root = createRoot(document.getElementById('root'));

root.render(
  <StrictMode>
    <FeedbackProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </FeedbackProvider>
  </StrictMode>
);
