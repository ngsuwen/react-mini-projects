import React, { useReducer } from 'react';
import './styles.css';
import AllTheThings from './components/AllTheThings';
import MyShoppingCart from './components/MyShoppingCart';
import Form from './components/Form';
import productsArr from './products';

const listReducer=(state,action)=>{
  switch(action.type){
    case 'ADD': 
      return state = {
        ...state, 
        cart: [...state.cart,action.payload]
      };
    case 'REMOVE': 
      const indexFound = state.cart.findIndex((item)=>(item===action.payload))
      return state = {
        ...state,
        cart: state.cart.filter((item, index)=>index!==indexFound)
      };
    case 'SUBMIT': 
      return state = {
        ...state, 
        prod: [action.payload,...state.prod]
      };
    default: 
      return state;
  }
}

export default function App() {
  const [list, listDispatch] = useReducer(listReducer, {prod:productsArr, cart:[]})
  
  const productsMap = list.prod.map((product, index)=>{
    return <AllTheThings key={index} name={product.name} price={product.price} description={product.description} addToCart={listDispatch}/>
  }) 
  const cartMap = list.cart.map((product, index)=>{
    return <MyShoppingCart key={index} list={product} removeFromCart={listDispatch}/>
  })

  return (
    <div className="App">
      <h1>Big Time Shopping</h1>
      <Form addToList={listDispatch}/>
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
