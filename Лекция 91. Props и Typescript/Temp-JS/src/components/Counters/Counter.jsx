import { useState } from 'react'

const Counter = ({rendler}) => {
    console.log("counter")

    const [count, setCount]= useState(0)

   const  hendleCount =()=>{
    setCount( (prev)=> prev+1)
   }

   return rendler({count, hendleCount})


}

export default Counter