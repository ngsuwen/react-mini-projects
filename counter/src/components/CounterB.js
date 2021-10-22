import React, { useContext } from 'react';
import DataContext from './DataContext';

function CounterHooks() {
  // const [count, setCount] = useState(0);
  const [count, setCount]=useContext(DataContext)

  return (
    <section>
      <h2>Count:{count.counterB}</h2>
      <button onClick={()=>setCount({type:'CHANGEB',payload:1})}>+</button>
      <button onClick={()=>setCount({type:'CHANGEB',payload:-1})}>-</button>
      <button onClick={()=>setCount({type:'SETB',payload:0})}>Reset</button>
    </section>
  );
}

export default CounterHooks;