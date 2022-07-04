import React from 'react';
// import ReactDOM from 'react-dom';
import Root from 'views/Root';
import 'assets/styles/fonts.css';
import { createRoot } from 'react-dom/client';
import { worker } from 'mocks/browser';

worker.start();
createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>
);
