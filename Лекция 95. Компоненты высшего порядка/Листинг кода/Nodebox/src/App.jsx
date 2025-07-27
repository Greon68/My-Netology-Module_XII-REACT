import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { UsersList } from "./components/UsersList/UsersList";
import { User } from "./components/User/User";
import { AppCounter } from "./components/AppCounter/AppCounter";
import Button from './components/Button/Button';

function App() {
  

  return (
    <>
 
      <h1>Vite + React</h1>

      <UsersList /> 
      <User id={3} />
      {/* <AppCounter /> */}
      {/* < Button /> */}
   
    </>
  )
}

export default App
