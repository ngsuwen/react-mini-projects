import React from 'react';

export default function Cities({img, city, id, zoomFunction, checkBorder, borderColor}){
    const styles={
        border: checkBorder?borderColor:`0px solid green`
    }
    return(
        <img src={img} alt={city} id={id} onClick={zoomFunction} style={styles}></img>
    )
}