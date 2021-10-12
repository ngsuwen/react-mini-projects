import React from 'react';
import { useState } from "react"

export default function Card({rank, suit, cardImage, backgroundImage}){
    const [state, setState]=useState(backgroundImage)
    const flip=()=>{
        if (state===backgroundImage){
            setState(cardImage)
        } else {
            setState(backgroundImage)
        }
    }
    return(
    <>
    <img src={state} alt={rank, suit} onClick={flip}></img>
    </ >
    )
}