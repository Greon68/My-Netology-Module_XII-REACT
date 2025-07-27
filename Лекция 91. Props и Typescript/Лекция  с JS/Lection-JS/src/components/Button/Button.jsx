import { Children, useState, } from "react";

const Button = ({ render }) => {  
    console.log('кнопка')
    // console.log(children)
  
    return render();
  };

  // const Button = ({ render ,children }) => {  
  //   console.log('кнопка')
  //   console.log(children)
  
  //   return render();
  // };

  export default Button 