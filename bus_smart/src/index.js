import React from 'react';
import { createRoot } from 'react-dom/client';
import HelloWorld from './component/bus_smart.js';

const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HelloWorld />
  </React.StrictMode>
);