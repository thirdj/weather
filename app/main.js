import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.js';
import Card from './components/Card.js';
// http://openweathermap.org/
// http://www.material-ui.com/#/components/card
ReactDOM.render(
  <div>
    <App />
    <Card />
    <br />
    <Card />
    <br />
    <Card />
  </div>,
  document.querySelector('#root')
);
