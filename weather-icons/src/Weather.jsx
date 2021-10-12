import React from 'react';

function Weather({img,conditions,time}) {
    return(
    <div class="weather">
      <img src={img} alt=""/>
      <p><span>conditions:</span> {conditions}</p>
      <p><span>time:</span> {time}</p>
    </div>
    )
}

export default Weather