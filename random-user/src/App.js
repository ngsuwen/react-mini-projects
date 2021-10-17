import React, {useEffect, useState} from 'react';
import './styles.css';
import UserInfo from './UserInfo';

export default function App() {
  const [user, setUser]=useState({image:'', name:'', email:'', birthdate:'', city:'', phone:''})
  const [smallText, setSmallText]=useState('name')
  const [bigText, setBigText]=useState('')

  useEffect(()=>{
    async function fetchData(){
      const url = 'https://randomuser.me/api/'
      const res = await fetch(url)
      const data = await res.json()
      setUser({
        image: data.results[0].picture.large,
        name: data.results[0].name.first,
        email: data.results[0].email,
        birthdate: data.results[0].dob.date,
        city: data.results[0].location.street.number + ' ' + data.results[0].location.street.name,
        phone: data.results[0].phone
      })
      setBigText(data.results[0].name.first)
    }
    fetchData()
  },[])

  const handleClick = (id) => {
    setSmallText(id)
    setBigText(user[id])
  }

  const styles = {
    backgroundImage: `url(${user.image})`
  }

  return (
    <div id="container">
      <div style={styles} id="photo"></div>
      <div id="content">
        <span id="smalltext">My {smallText} is</span>
        <span id="bigtext">{bigText}</span>
      </div>
      <UserInfo id='name' role='img' label='face' icon='😀' click={handleClick}/>
      <UserInfo id='email' role='img' label='email' icon='📧' click={handleClick}/>
      <UserInfo id='birthdate' role='img' label='confetti' icon='🎉' click={handleClick}/>
      <UserInfo id='city' role='img' label='city' icon='🌆' click={handleClick}/>
      <UserInfo id='phone' role='img' label='tele' icon='📞' click={handleClick}/>
    </div>
  );
}
