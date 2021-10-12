// import useState
import React, { useState } from 'react';
import './styles.css';
import AllTheThings from './components/AllTheThings';
import MyShoppingCart from './components/MyShoppingCart';
import Form from './components/Form';
import productsArr from './products';


export default function App() {
  const [products, setProducts] = useState(productsArr);
  const [cart, setCart] = useState([]);
  
  const productsMap = productsArr.map((product, index)=>{
    return <AllTheThings key={index} name={product.name} price={product.price} addToCart={setCart} cart={cart}/>
  })
  
  const cartMap = cart.map((product, index)=>{
    return <MyShoppingCart key={index} list={product}/>
  })

  // create an addToCart function that takes in a product as a param
  // using the ...spread operator add the product to the cart array

  // create an removeFromCart function that takes in an index as a param
  // using Array.filter remove create a new array where that item is removed

  return (
    <div className="App">
      <h1>Big Time Shopping</h1>
      <Form />
      <div className="products">
      <div className="AllTheThings">
        <h2>Put these in your cart!</h2>
        <ul>
        {productsMap}
        </ul>
      </div>
      <div className="MyShoppingCart">
        <h2>Your Cart!</h2>
        {cartMap}
      </div>
      </div>
    </div>
  );
}
