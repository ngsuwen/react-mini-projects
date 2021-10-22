import React from 'react';

function AllTheThings(props) {
  const add=()=>{
    props.addToCart({type:'ADD', payload:`${props.name} - $${props.price}`})
  }
  return (
        <li onClick={add}> {`${props.name} - $${props.price}`}<br/> {props.description} </li>
  );
}

export default AllTheThings;
