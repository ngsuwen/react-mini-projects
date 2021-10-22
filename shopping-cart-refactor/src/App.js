// import useState
import React, { useState, useReducer } from 'react';
import './styles.css';
import AllTheThings from './components/AllTheThings';
import MyShoppingCart from './components/MyShoppingCart';
import Form from './components/Form';
import productsArr from './products';

const cartReducer=(state,action)=>{
  switch(action.type){
    case 'ADD': 
      return state = [...state, action.payload];
    case 'REMOVE': 
      const indexFound = state.findIndex((item)=>(item==action.payload))
      return state = state.filter((item, index)=>index!==indexFound);
    default: 
      return state;
  }
}

export default function App() {
  const [products, setProducts] = useState(productsArr);
  const [cart, cartDispatch] = useReducer(cartReducer, [])
  
  const productsMap = products.map((product, index)=>{
    return <AllTheThings key={index} name={product.name} price={product.price} description={product.description} addToCart={cartDispatch}/>
  })
  
  const cartMap = cart.map((product, index)=>{
    return <MyShoppingCart key={index} list={product} removeFromCart={cartDispatch}/>
  })

  return (
    <div className="App">
      <h1>Big Time Shopping</h1>
      <Form addToList={setProducts} list={products}/>
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
