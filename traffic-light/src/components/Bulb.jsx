import React from 'react';


export default function Bulb(props){
    const styles ={
        backgroundColor:props.color
    }
    return(
    <>
    <div id={props.action} class="bulb" style={styles}></div>
    </ >
    )
}