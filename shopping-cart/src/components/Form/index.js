import React from 'react';
import {useState} from 'react';

function Form(props) {
  const [state, setState]=useState({name:'', price:'',description:''})
  const [isPriceValid, setIsPriceValid]=useState(true)
  const [isNameValid, setIsNameValid]=useState(true)
  const [isDescriptionValid, setIsDescriptionValid]=useState(true)

  const callback=()=>{
    if (validatePrice(state.price) && validateName(state.name) && validateDescription(state.description)){
      return props.addToList([state, ... props.list])
    }
  }
  const changeHandler=(event)=>{
    setState({ ...state,
      [event.target.name]: event.target.value
    })
  }
  function validatePrice(price) {
    const re = /^\d+(.\d{2})?$/
    return re.test(price);
  }
  function validateName(name) {
    const re = /(?!^$)([^\s])/
    return re.test(name);
  }
  function validateDescription(description) {
    const re =/(?!^$)([^\s])/
    return re.test(description);
  }
  const onPriceBlur=()=>{
      const isPriceValid=validatePrice(state.price)
      setIsPriceValid(isPriceValid)
  }
  const onNameBlur=()=>{
    const isNameValid=validateName(state.name)
    setIsNameValid(isNameValid)
  }
  const onDescriptionBlur=()=>{
    const isDescriptionValid=validateDescription(state.description)
    setIsDescriptionValid(isDescriptionValid)
  }
  return (
    <div className="Form">
      <input type='text' name='name' placeholder='product name' onChange={changeHandler} onBlur={onNameBlur}/>
      <input type='text' name='price' placeholder='price' onChange={changeHandler} onBlur={onPriceBlur}/>
      <input type='text' name='description' placeholder='description' onChange={changeHandler} onBlur={onDescriptionBlur}/>
      <input type='submit' onClick={callback}/>
      {isNameValid?'':<p>Name cannot be empty</p>}
      {isPriceValid?'':<p>Price needs to have either 0 or 2dp.</p>}
      {isDescriptionValid?'':<p>Description cannot be empty</p>}
    </div>
  );
}

export default Form;