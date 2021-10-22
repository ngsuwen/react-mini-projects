import React from 'react'
import lightData from '../lightData'

function Controls(props) {
  const clickHandler=()=>{
    props.click({
        type:props.control, 
        payload:lightData[props.index]
      })
  }
  return (    
      <button onClick={clickHandler}>{props.control}</button>
  )
}

export default Controls