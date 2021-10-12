import React from 'react';
import Bulb from './components/Bulb';
import { useState } from "react"
import bulbEvents from './bulbData';

export default function App() {
  const [state, setState]=useState(bulbEvents)
  const flip=(x)=>{
    if (x==='stop'){
        setState({
            Stop:'red',
            Slow:'black',
            Go:'black'
        })
    } else if (x==='slow'){
        setState({
            Stop:'black',
            Slow:'orange',
            Go:'black'
        })
    } else {
        setState({
            Stop:'black',
            Slow:'black',
            Go:'green'
        })
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
          <Bulb color={state.Stop} action='stop'/>
          <Bulb color={state.Slow} action='slow'/>
          <Bulb color={state.Go} action='go'/>
        </div>
      </section>
    </div>
  );
}