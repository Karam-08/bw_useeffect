import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import ConsoleLogComponent from './components/ConsoleLogComponent';
import Counter from './components/Counter'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ConsoleLogComponent />
    <Counter />
  </React.StrictMode>
);