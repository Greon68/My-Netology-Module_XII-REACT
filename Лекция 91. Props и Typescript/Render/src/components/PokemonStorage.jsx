import { useState, useEffect } from "react"

// const PokemonStorage = ({ render }) => {
//     const [list, setList] = useState([]);
    
//     useEffect(() => {
//       fetch('https://pokeapi.co/api/v2/pokemon?limit=7&offset=0')
//         .then(r => r.json())
//         .then(({ results }) => setList(results))
        
//     }, [])
//     console.log ('list - ', list)
    
//     return render(list)
//   } 

  const PokemonStorage = () => {
    
    
    useEffect(() => {
      fetch('https://pokeapi.co/api/v2/pokemon?limit=8&offset=0')
        .then(r => r.json())
        .then(console.log)
        // .then(({ results }) => setList(results))
        
    }, [])
    // console.log ('list - ', list)
    
    // return render(list)
  } 
export default PokemonStorage