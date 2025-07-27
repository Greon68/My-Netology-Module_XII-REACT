import { useState } from 'react'
import { Feedback } from './components/Feedback/Feedback'
import { FeedbackForm } from './components/FeedbackForm/FeedbackForm'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <h2>Vite + React: My Forms</h2>
      {/* <Feedback/> */}
      <FeedbackForm/>

    </>
  )
}

export default App
