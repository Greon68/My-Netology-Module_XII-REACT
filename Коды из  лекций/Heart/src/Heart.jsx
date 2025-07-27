import { useState } from "react";
import "./Heart.css";


// export const Heart = () => {
//     let count = 0;

//   const increment = () => {
//    count ++ ;
//    console.log ('likes !!!', count )
//   };

//   return (
//     <div className="heart" onClick={increment}>
//       {count}
//     </div>
//   );
// };
// --------------------------------------

// export const Heart = () => {
//     // const response = useState(0)
//     // console.log('response - ', response)
//     const [count, setCount] = useState(0)

//   const increment = () => {
//     setCount (count + 1);
//     console.log("count - ", count);
//     // if (count>=5){
//     //   setCount (0)
//     // }
//   };

//   return (
//     <div className="heart" onClick={increment}>
//       {count}
//     </div>
//   );
// };
// --------------------------------------------

// export const Heart = () => {
//   const [count, setCount] = useState(5)

//   const increment = () => {
//     setCount ((x) => x+10 )
//     console.log("count - ", count);
    
//   };

//   return (
//     <div className="heart" onClick={increment}>
//       {count}
//     </div>
//   );
// };
// ---------------------------------------

// const inc = (x)=>x+1 ;

// export const Heart = () => {
//     const [count, setCount] = useState(0)
    
//     const increment = () => {
//       setCount (inc);
//       console.log("count - ", count);
//       // Обнуление счётчика 
//       if (count >= 5){
//         setCount (0)
//       }
    
      
//     };
  
//     return (
//       <div className="heart" onClick={increment}>
//         {count}
//       </div>
//     );
//   };

// ****************************************
// ******************************* ❤️

const inc = (x) => x + 1; 

export const Heart = (props) => {
  const [count, setCount] = useState(0);

  const onClick = () => {
    props?.onLike();
    // props.onLike();
    setCount(inc);
  };

  return (
    <div className="heart" onClick={onClick}>
      {count}
    </div>
  );
};