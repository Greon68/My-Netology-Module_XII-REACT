import { useState } from 'react'
import './App.css'
import { Feedback } from './components/Feedback/Feedback'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <h1>Vite + React</h1>
      <Feedback />

    </>
  )
}

export default App
