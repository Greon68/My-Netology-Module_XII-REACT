import { useState } from 'react'

import { LikeButton } from "./components/LikeButton";
import { LikeButtonFC } from './components/LikeButtonFC'
import { LikeButtonCC } from './components/LikeButtonCC'

import './App.css'

function App() {
 
  return (
    <>

      <h2>Vite + React : Event + State</h2>
      {/* <LikeButton /> */}
       <LikeButtonFC />
      {/* <LikeButtonCC /> */}

    </>
  )
}

export default App
