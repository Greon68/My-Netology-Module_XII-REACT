import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Switch from './Switch/Switch'

function App() {

  const onSwitchToggle = (value) => {
    console.log({ value });
  };

  return (
    <>     
      <Switch data={["Вкл", "Выкл"]} onToggle={onSwitchToggle} enabled />
    </>
  )
}

export default App
