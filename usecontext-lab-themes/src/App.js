import React, { useState } from 'react';
import './styles.css';
import LeftComp from './LeftComp';
import RightComp from './RightComp';
import DataContext from './DataContext';

const themes = {
  light: {
    background: 'lightblue',
    color: 'black'
  },
  dark: {
    background: '#222222',
    color: 'white'
  }
};


export default function App() {
  const [activeTheme, setActiveTheme] = useState(themes.light);
  
  const clickHandler=()=>{
    (activeTheme===themes.light)?setActiveTheme(themes.dark):setActiveTheme(themes.light)
  }
  
  return (
    <div className="App">
      <h2>Click the button to toggle themes</h2>
      <button onClick={clickHandler}>Toggle Themes</button>
      <div className="children">
        <DataContext.Provider value={activeTheme}>
        <LeftComp />
        <RightComp />
        </DataContext.Provider>
      </div>
    </div>
  );
}
