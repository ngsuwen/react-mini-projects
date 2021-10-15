import React from 'react';

function MyShoppingCart(props) {
  const remove=()=>{
    let indexFound=props.cart.findIndex(item=>item===props.list)
    props.removeFromCart(props.cart.filter((item, index)=>index!=indexFound))
  }
  return (
    <li onClick={remove}>{props.list}</li>
    
  );
}

export default MyShoppingCart;
