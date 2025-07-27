import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { Modal } from "./components/Modal";
import { Message } from "./components/Message";
import { ErrorMessage } from "./components/ErrorMessage";
import "./styles.css";

function App() {


  return (
    <>
  
      <h1>Vite + React - Compposition Components</h1>

      {/* <Modal> */}
        {/* {['a', 'b'].map((i) => <div key={i}>{i}</div>)} */}

        {/* <a href="/">Link-1</a>
        <a href="/">Link-2</a>
        <a href="/">Link-3</a> */}

        {/* <h1>Modal title</h1> */}
        {/* <p>Modal content</p> */}
        {/* <button>CTA button</button> */}
      {/* </Modal> */}

      <Message
        type="info"
        title="Message title"
        info="Message info"
        handler={() => console.log("clicked")}
      />
      <Message
        type="success"
        title="Message title"
        info="Message info"
        handler={() => console.log("clicked")}
      />
      <ErrorMessage
        title="Message title"
        info="Message info"
        handler={() => console.log("clicked")}
      />



    </>
  )
}

export default App
