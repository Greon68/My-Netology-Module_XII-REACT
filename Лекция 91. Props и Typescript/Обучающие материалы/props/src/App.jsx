import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css';
import Welcome from './Welcome';
import Comment from './Comment';
import Clock from './Clock';

function App() {

  const people = {
    name:'Igor',
    age: 25
  }
  
  const comment = {
    date: new Date(),
    text: 'Надеюсь, вам понравится изучение React!',
    author: {
      name: 'Garri',
      avatarUrl: 'https://taxpert.ru/neuroavatar/large/fbd6228267dc2935.jpg',
    },
  };

  return (
    <>
      {/* <Welcome name='Sara' age='25'/> */}
      {/* <Welcome name='Oleg'/> */}
      {/* <Welcome people={people}/>   */}

      {/* < Comment comment = {comment} people ={people} /> */}

      {/* < Clock data={new Date()}/> */}
      < Clock />
    </>
  )
}

export default App
