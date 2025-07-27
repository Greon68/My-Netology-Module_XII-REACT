import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Hello from './Hello'

import ToggleComponent from './ToggleComponent'
import CityForm from './CityForm';
import Count from './Count'

function App() {
  const [count, setCount] = useState(0)

  return (
    <> 
      <h1>Vite + React</h1>
      {/* <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div> */}
        {/* < Hello /> */}
       < ToggleComponent/>
       {/* < CityForm/> */}
       {/* <Count count={count} onLicke ={()=>setCount((x)=> x+1)}/> */}
    </>
  )
}

export default App
