import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './components/Counters/Counter'
import Counter1 from './components/Counters/Counter1'
import PurchaseList from './components/Purchase/PurchaseList'
import "./style.css"

import Like from './components/Like/Like'

function App() {
 

  return (
    <>   
      <h1>Vite + React</h1>

      {/* <Counter  rendler = {({count, hendleCount}) => (
        <Counter1 count={count} handleCount={hendleCount}/>
       )
      }
       /> */}

       {/* < PurchaseList/> */}
       {/* <Like /> */}
       <button><Like /></button>

      
    

    </>
  )
}

export default App
