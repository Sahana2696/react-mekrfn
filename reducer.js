import { globalState } from './globalState';
const reducer = (state = globalState, action) => {
  switch (action.type) {
    case "GETDATA":
      return state
    case "SETDATA":
      return state
  }
}
export { reducer };