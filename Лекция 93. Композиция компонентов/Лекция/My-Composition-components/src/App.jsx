import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import DiscountModal from './components/DiscountModal/DiscountModal'
import OfferModal from './components/OfferModal/OfferModal'
import RegisterFormModal from './components/RegisterFormModal/RegisterFormModal'
import List from './components/List/List'
import ErrorMessage from './message/ErrorMessage'
import InfoMessage from './message/InfoMessage'
import Sidebar from './Sidebar/Sidebar'

function App() {

  return (
    <>
     
      <h1>Vite + React: Composition of components</h1>
      {/* <DiscountModal/> */}
      {/* < OfferModal/> */}
      {/* <RegisterFormModal/> */}

      {/* <List marker="+++">        
        <div>Мясо</div>
        <div>Колбаса</div>
        <div>Селёдка</div>
      </List> */}

      {/* <ErrorMessage> Ошибка ввода </ErrorMessage> */}
      {/* <InfoMessage> <h3>Это информационное сообщение !</h3> </InfoMessage> */}
      
      <Sidebar/>
    </>
  )
}

export default App
