import { useState } from 'react'
import './App.css'
import AppCounter from './components/Count/AppCounter'
import { User } from "./components/User/User";
import { UsersList } from "./components/UsersList/UsersList";


function App() {

  return (
    <>

      <h2>Vite + React: Компоненты высшего  порядка</h2>
      {/* < AppCounter /> */}
      < UsersList />
       <User id={2} />
       

    </>
  )
}

export default App
