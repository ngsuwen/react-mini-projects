import React, {useState, useEffect} from "react";
import "./styles.css";
import ColoredDiv from './ColoredDiv'

export default function App() {
  const [colors, setColors] = useState(['lightgreen', 'pink', 'lightblue'])
  const [width, setWidth] = useState(0)
  const arr = ['lightgreen', 'pink', 'lightblue', 'yellow', 'orange', 'red']

  useEffect( () => {
    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, [])

  const updateWidth = () => {
    setWidth(window.innerWidth)
  }

  const colorsArr = colors.map( (d,i) => {
    return (
    <ColoredDiv color={d} key={i} index={i} remove={setColors} colors={colors}/>)
  })
  
  const addNew=()=>{
    let randomIndex = Math.floor(Math.random()*arr.length)
    let color = arr[randomIndex]
    setColors([...colors, color])
  }

  return (
    <div className="App">
    <h1>Current Window Width: {width}</h1>
    <div className='colored-divs'>
      {colorsArr}
    </div>
    <button onClick={addNew}>Add New Color</button>
  </div>
  );
}
