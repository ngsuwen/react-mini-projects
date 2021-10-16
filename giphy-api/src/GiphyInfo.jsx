import React from 'react'

function giphyInfo(props){
  return (
    <div className='Giphy-data'>
        <img src={props.giphy} alt=''/>
    </div>
  )
}

export default giphyInfo