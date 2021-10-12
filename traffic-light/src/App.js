import React from 'react';
import Bulb from './components/Bulb';
import { useState } from "react"

export default function App() {
  const [state, setState]=useState('black')
  const [state2, setState2]=useState('black')
  const [state3, setState3]=useState('black')
  const flip=(x)=>{
    if (x==='stop'){
      setState('red')
      setState2('black')
      setState3('black')
    } else if (x==='slow'){
      setState2('orange')
      setState3('black')
      setState('black')
    } else {
      setState3('green')
      setState2('black')
      setState('black')
    }
  }
  return (
    <div className="App">
      <section>
        <div id="control-panel">
          <h2 id="stop" class="button" onClick={function(){flip('stop')}}>Stop</h2>
          <h2 id="slow" class="button" onClick={function(){flip('slow')}}>Slow</h2>
          <h2 id="go" class="button" onClick={function(){flip('go')}}>Go</h2>
        </div>
        <div id="traffic-lights">
          <Bulb color={state} action='stop'/>
          <Bulb color={state2} action='slow'/>
          <Bulb color={state3} action='go'/>
        </div>
      </section>
    </div>
  );
}

