import React from 'react';
import React, { useState, useContext } from 'react';

import { StoreContext } from './store';
const Count = () => {
  console.log("StoreContext--",StoreContext);
  const {state,dispatch} = useContext(StoreContext);
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>{count}times</p>
      <button type="button" onClick={() => setCount(count + 1)}>Click me!</button>
    </div>
  );
}
export default Count;

