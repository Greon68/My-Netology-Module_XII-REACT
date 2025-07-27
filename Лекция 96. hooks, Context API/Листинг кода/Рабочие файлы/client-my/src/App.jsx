import { useState } from 'react'
import './App.css'
import { Effects  } from './hooks/Effects'
import { MemoExample } from './hooks/MemoExample'

 

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <h2>Vite + React : Hooks(листинг кода)</h2>
      <Effects/>
      <MemoExample/>

     
      
      
    </>
  )
}

export default App
