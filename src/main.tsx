import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import Presentation from './Presentation.tsx';
import './index.css';

const isPresentation =
  window.location.pathname.replace(/\/$/, '') === '/presentation' ||
  window.location.search.includes('presentation=1') ||
  window.location.hash === '#presentation';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {isPresentation ? <Presentation /> : <App />}
  </React.StrictMode>,
);
