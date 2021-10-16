import React from "react";

const ColoredDiv = (props) => {

  let styles = {
    background: props.color
  }

  const removeHandler=()=>{
    const newArr = [...props.colors]
    newArr.splice(props.index, 1)
    props.remove(newArr)
  }
  
  return (
    <>
      <div 
        style={styles}
        className="colored-div"
        >
        {props.color}
        <button onClick={removeHandler}>Remove</button>
      </div>
    </>
  );
}

export default ColoredDiv