import React from 'react';
import { useParams } from 'react-router-dom'

const Stock = (props) => {
  const params = useParams();
  const i = props.list.findIndex((element) => (element.symbol === params.stock))
  return (
    <div>
    {i!==-1?<>
      <h3>Name: {props.list[i].name}</h3>
      <h3 className="price">Price: {props.list[i].price}</h3></>
      :''}
    </div>
  )
}


export default Stock