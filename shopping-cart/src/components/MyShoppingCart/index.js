import React from 'react';

function MyShoppingCart(props) {

  return (
    <li onClick={(e) => e.target.remove()}>{props.list}</li>
    
  );
}

export default MyShoppingCart;
