import React from 'react';

function MyShoppingCart(props) {
  const remove=()=>{
    props.removeFromCart({type:'REMOVE', payload:props.list})
  }
  return (
    <li onClick={remove}>{props.list}</li>
    
  );
}

export default MyShoppingCart;
