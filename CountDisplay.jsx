import React from 'react';
import React, { useState, useContext} from 'react';
import {getData} from './action';
import {CountWrapper}  from './styled'

const CountDisplay=props=>{
  return <CountWrapper>
        <button type='button' onClick={props.handleClick}>Button</button>
         <button type='button' onClick={props.handleClick}>Button</button>
          <button type='button' onClick={props.handleClick}>Button</button>
           <button type='button' onClick={props.handleClick}>Button</button>
           <input type='text' onChange={props.InputChange}/>
     </CountWrapper>
}
export {CountDisplay};

