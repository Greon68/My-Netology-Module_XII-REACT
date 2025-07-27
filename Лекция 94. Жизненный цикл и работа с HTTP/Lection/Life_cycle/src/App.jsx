import { useState } from 'react'
import './App.css'


import { Caluclator } from "./components/Calculator";
import { CircleOfLife } from "./components/CircleOfLife";
import { PieChart } from "./components/PieChart";
import { WindowSize } from "./components/WindowSize";

function App() {  

  return (
    <>
 
      <h1> Жизненный цикл и работа с HTTP</h1>

      {/* <Caluclator /> */}
      <CircleOfLife />
      {/* <PieChart /> */}
      {/* <WindowSize /> */}
 
    </>
  )
}

export default App
