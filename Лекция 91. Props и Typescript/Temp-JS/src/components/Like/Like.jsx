import React, { Component } from 'react';
// сердце
import { FaHeart } from "react-icons/fa";

// Удаление- корзинка:
import { FaTrash} from "react-icons/fa";

// Удаление - крестик:
import { FaTimes } from "react-icons/fa";

class Like extends Component {
  render() {
    return ( 
        <div className='icon'>
            {/* <FaHeart style={{color: 'green', fontSize: '50px'}}/>   */}
            <FaTrash style={{color: 'blue', fontSize: '50px'}}/> 
            {/* <FaTimes style={{ fontSize: '50px'}}/> */}
        </div>
  
      )
  }
}

export default Like;