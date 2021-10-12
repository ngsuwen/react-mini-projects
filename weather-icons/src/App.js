import React from "react";
import "./styles.css";
import weatherData from './weatherData';
import Weather from './Weather'

const weatherIcons=weatherData.map((record, index)=>{
  return <Weather key={index} {...record}/>
})

export default function App() {
  return (
    <div className="App">
      <h1>My WeatherIcons App</h1> 
      <section>
      {weatherIcons}
      </section>
    </div>
  );
}
