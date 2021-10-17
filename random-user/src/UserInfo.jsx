import React from 'react'

export default function icons(props){
    const clickHandler=(event)=>{
        props.click(event.target.id)
    }
    return(
    <div className="attribute">
        <span id={props.id} role={props.role} aria-labelledby={props.label} onClick={clickHandler}>
            {props.icon}
        </span>
    </div>
    )
}