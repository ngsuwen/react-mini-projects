import React, { useContext } from 'react';
import DataContext from './DataContext';

function CounterHooks() {
  // const [count, setCount] = useState(0);
  const [count, setCount]=useContext(DataContext)

  return (
    <section>
      <h2>Count:{count.counterA}</h2>
      <button onClick={()=>setCount({type:'CHANGEA',payload:1})}>+</button>
      <button onClick={()=>setCount({type:'CHANGEA',payload:-1})}>-</button>
      <button onClick={()=>setCount({type:'SETA',payload:0})}>Reset</button>
    </section>
  );
}

export default CounterHooks;