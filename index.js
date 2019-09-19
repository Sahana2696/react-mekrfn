import React, { Component } from 'react';
import { render } from 'react-dom';
import Count from './Count';
import { StoreProvider, StoreContext } from './store'
console.log(StoreContext);
import './style.css';
const App = () => {

  return (
    <div>
      <Count />
    </div>
  );
}
render(
  <StoreProvider>
    <App />
  </StoreProvider>
,document.getElementById('root'));
