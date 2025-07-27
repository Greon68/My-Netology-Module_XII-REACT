import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css';

import { List } from './List';

import { Hello } from './Hello';

function App() {

  // Массив данных
  const people = [
    'Creola Katherine Johnson: mathematician',
    'Mario José Molina-Pasquel Henríquez: chemist',
    'Mohammad Abdus Salam: physicist',
    'Percy Lavon Julian: chemist',
    'Subrahmanyan Chandrasekhar: astrophysicist'
  ];
  

  return (
    <>
      {/* <Hello/> */}
      <List people={people}/>
    
    </>
  )
}

export default App
