import React, {useReducer} from "react";
import CounterA from './CounterA'
import CounterB from './CounterB'
import DataContext from "./DataContext";

const countReducer=(state,action)=>{
  switch(action.type){
    case 'CHANGEA': 
      return ({
        ...state,
        counterA: state.counterA + action.payload});
    case 'SETA':
      return ({
        ...state,
        counterA: action.payload});
    case 'CHANGEB': 
    return ({
      ...state,
      counterB: state.counterB + action.payload});
  case 'SETB':
    return ({
      ...state,
      counterB: action.payload});
    default: 
      return state
  }
}

function App() {
  // const [count, setCount]=useState({counterA:0,counterB:0})
  const [count, setCount] = useReducer(countReducer,{counterA:0,counterB:0})

  return (
    <div className="nes-text is-primary">
      <DataContext.Provider value={[count, setCount]}>
        <CounterA />
        <CounterB />
      </DataContext.Provider>
      <h1>Total sum: {count.counterA + count.counterB}</h1>
    </div>
  );
}

export default App