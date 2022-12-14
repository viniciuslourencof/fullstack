import React from 'react';
import ReactDOM from 'react-dom/client';
import Equipe from './Equipe';
import Jogador from './Jogador';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Equipe />
    {/* <Jogador /> */}
  </React.StrictMode>
);
