import React from 'react';

function AllTheThings(props) {
  const callback=()=>{
    props.addToCart([... props.cart, `${props.name} - $${props.price}`])
  }
  return (
        <li onClick={callback}> {`${props.name} - $${props.price}`}</li>
  );
}

export default AllTheThings;
