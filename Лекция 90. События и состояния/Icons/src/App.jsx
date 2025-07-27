import { useState } from 'react'
// import { FaHeart } from "react-icons/fa";
import { FaHeart, FaRegHeart, FaList, FaThList,FaThLarge, FaTh, FaStar } from 'react-icons/fa';
import { BsHeartFill, BsHeart,  } from "react-icons/bs";
import { Block } from './components/Block';

import './App.css'

function App() {

  const fontStyles = {color: 'blue', fontSize: '80px'};


  return (
    <>
     
      {/* <h1>Vite + React</h1> */}
      {/* <FaHeart />   */}
      
      <div className='icons'>
      <span class="bi bi-stars blue-color"> </span>
        
        <FaHeart />
        <FaRegHeart />
        <BsHeartFill />
        <BsHeart />
        <FaStar className='star'/>

        {/* <FaHeart style={{color: 'red', fontSize: '50px'}}/> */}

        {/* <h1><FaHeart style={{color: 'red'}}/></h1>
        <h3><FaRegHeart style={{color: 'green'}}/></h3> */}

        {/* <FaHeart style={fontStyles}/>
        <FaRegHeart style={fontStyles}/> */}

        {/* <FaHeart className='yellow'/> */}
        {/* <FaList/> */}
        {/* <FaThList/> */}
        {/* < FaThLarge/> */}
        {/* < FaTh/> */}
      </div>

      {/* <Block/> */}
   
    </>
  )
}

export default App
{/* <span class="material-symbols-outlined">
view_list
</span> */}