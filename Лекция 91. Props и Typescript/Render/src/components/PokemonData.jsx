import { useState, useEffect } from "react"

export const PokemonData= ({render})=> {
    const [list, setList] = useState([]);

    useEffect ( ()=>{
        fetch ('https://pokeapi.co/api/v2/pokemon?limit=8&offset=0')
        .then (r => r.json())
        .then ( ({results}) => setList(results))

    },[])

    return render(list)
}

// const PokemonStorage = ({ render }) => {
//     const [list, setList] = useState([]);
    
//     useEffect(() => {
//       fetch('https://pokeapi.co/api/v2/pokemon?limit=100&offset=0')
//         .then(r => r.json())
//         .then(({ results }) => setList(results))
//     }, [])
    
//     return render(list)
//   } 
  