import React, { Component } from 'react';
import { render } from 'react-dom';
import Count from './Count'

import './style.css';
const App=()=>{

    return (
      <div>
     
       <Count/>
      </div>
    );
  }


render(<App />, document.getElementById('root'));
