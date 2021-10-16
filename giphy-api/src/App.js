import React, { useEffect, useState} from 'react';
import './App.css';
import Form from './Form';
import GiphyInfo from './GiphyInfo';
import {GiphyFetch} from '@giphy/js-fetch-api';

const gf = new GiphyFetch('hNzaE7yr0PysdaZGg2y4ckpOWj5MIsrR')

function App() {
  const [giphyData, setGiphyData] = useState({});
  const [fav, setFav] = useState({});

  async function newApiCall(){
    const response = await gf.random();
    setGiphyData(response.data.image_url);
  }

  async function viewFavourite(){
    setGiphyData(fav);
  }

  const favourite=()=>{
    setFav(giphyData)
    alert('Saved!')
  }

  const handleSubmit=(tag)=>{
    async function fetchData() {
      const response = await gf.random({tag:tag});
      setGiphyData(response.data.image_url);
    }
    fetchData();
  }

  useEffect(() => {
    async function fetchData() {
      const response = await gf.random();
      setGiphyData(response.data.image_url);
    }
    fetchData();
  },[])

  return (
    <div className="App">
      <h1>Giphy</h1>
      <Form handleSubmit={handleSubmit} />
      <div className='display'><GiphyInfo giphy={giphyData} /></div>
      <button onClick={newApiCall}>Random GIF</button>
      <button onClick={favourite}>Favourite This</button>
      <button onClick={viewFavourite}>View Favourite</button>
    </div>
  );
}

export default App;
