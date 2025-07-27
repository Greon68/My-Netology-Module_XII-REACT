import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Icon from './components/Icon'

import { Feedback } from "./components/Feedback";
import { FeedbackForm } from './components/FeedbackForm'
import { FileChooser } from './components/FileChooser'
import { FileChooserAdv } from './components/FileChooserAdv'
import { RefExample } from "./components/RefExample";
import { BooksStore } from "./components/BooksStore";
import "./styles.css";

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      {/* <h1>Vite + React : Forms</h1> */}

      {/* <Feedback /> */}
      <FeedbackForm />
      {/* <FileChooser /> */}
      {/* <FileChooserAdv /> */}
      {/* <RefExample /> */}
      {/* <BooksStore /> */}

      {/* <Icon/> */}




    </div>
  )
}

export default App
