import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './styles.css'
import Feedback from './components/Feedback/Feedback'
import FeedbackName from './components/FeedbackName/FeedbackName'
import CounterRef from './components/CountRef/CountRef'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  
      {/* <h1>Vite + React: Lection - "Forms"</h1> */}
      {/* <Feedback/> */}
      < FeedbackName />
      < CounterRef />
    </>
  )
}

export default App
