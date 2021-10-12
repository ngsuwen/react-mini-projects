import React from 'react';
import './styles.css';
import imageArr from './imageData'
import { useState } from "react"
import Cities from './Cities'

export default function App() {
  const [state, setState]=useState('null')
  const [borderState, setBorderState]=useState(null)
  const zoom=(img, index)=>{
    document.getElementById('bigimage').style.visibility='visible'
    setState(img)
    setBorderState(index)
  }
  const citiesData = imageArr.map((data, index)=>{
    return <Cities id='smallimage' borderColor={'2px solid green'} checkBorder={borderState===index} key={index} {...data} zoomFunction={function(){zoom(data.img, index)}}/>
  })
  return (
    <div className="App">
      <h1>Cities Of The World</h1>
      <div id="wrapper">
        <div id="thumbnails">
          {citiesData}
        </div>
        <img src={state} id="bigimage" onError={(e) => e.target.style.visibility='hidden'}/>
      </div>
    </div>
  );
}
