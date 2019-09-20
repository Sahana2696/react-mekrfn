import React, { createContext, useReducer, useMemo } from 'react';
import { reducer } from './reducer';
import { globalState } from './globalState';

const StoreContext = createContext();

const StoreProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, globalState);
  console.log("state----",JSON.stringify(state))
  return <StoreContext.Provider value={{ state, dispatch }}>{props.children}</StoreContext.Provider>
}
export { StoreProvider, StoreContext };
















