import React from 'react';
import React,{useState} from 'react';
const Count=()=>{
  const[count,setCount]=useState(0);
  return(
    <div>
    <p>{count}times</p>
    <button type="button" onClick={()=>setCount(count+1)}>Click me!</button>
    </div>

  );

}