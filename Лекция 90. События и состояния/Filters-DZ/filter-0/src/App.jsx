import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Menu from './Menu';

import { Portfolio } from './Portfolio'
import { cards } from './data.js';

function App() {
  

  return (
    <>
      <Menu/>
      <Portfolio cards = {cards}/> 

    </>
  )
}

export default App
