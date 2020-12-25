import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// Meus componentes
import Calculator from './main/Calculator';
import Copyright from './main/Copyright';

import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>

    <Copyright author="João Paulo N. Freitas" site="joaopaulonfreitas.com"/>
    <h1 className="title">Calculadora</h1>
    <Calculator />

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
