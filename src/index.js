import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
  
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// Es una nota que le dejamos a orto desarrolladores para que se enteren de que se trata nuestro proyecto,Que comandos pueden utilizar, de que se basa y cosas asi.

// Package.json : Es importante, este archivo nos permite describir de que se trata nuestro proyecto entero, Que version es, nombre, si es privado, dependencias(Modulos que nuestro proyecto nesecita para funcionar(React, React-dom, React Scripts)).