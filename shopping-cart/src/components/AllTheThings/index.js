import React from 'react';

function AllTheThings(props) {
  const add=()=>{
    props.addToCart([... props.cart, `${props.name} - $${props.price}`])
  }
  return (
        <li onClick={add}> {`${props.name} - $${props.price}`}<br/> {props.description} </li>
  );
}

export default AllTheThings;
