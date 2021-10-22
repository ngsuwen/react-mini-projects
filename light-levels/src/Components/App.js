import React, { useReducer } from "react";
import Controls from './Controls'
import Light from './Light'
import lightData from '../lightData'

const levelReducer = (state, action) => {
  switch (action.type) {
    case 'off': return {light: action.payload, count: state.count + 1 }
    case 'low': return {light: action.payload, count: state.count + 1 }
    case 'med': return {light: action.payload, count: state.count + 1 }
    case 'high': return {light: action.payload, count: state.count + 1 }
    case 'reset': return {light: action.payload, count: 0 }
    default: return state
  }
}

function App() {
  const [level, setLevel] = useReducer(levelReducer, {light:lightData[0], count:0})
  const controls = lightData.map((d,i)=>{
    return <Controls key={i} index={i} control={d.name} click={setLevel}/>
  })
  return (
    <div className="App">
      <div className="controls">
        {controls}
        <p>Numbers of clicks: {level.count}</p>
      </div>
      <div className="reset">
        <button onClick={()=>setLevel({type:'reset', payload:lightData[0]})}>Reset</button>
      </div>
      <Light state={level.light.color} />
    </div>

  );
}

export default App
