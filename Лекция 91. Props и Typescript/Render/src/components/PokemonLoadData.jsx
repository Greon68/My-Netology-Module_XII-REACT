import { useState, useEffect } from "react"

export const PokemonLoadData= ()=> {
    const [list, setList] = useState([]);

    useEffect ( ()=>{
        fetch ('https://pokeapi.co/api/v2/pokemon?limit=12&offset=0')
        .then (r => r.json())
        // .then ( ({results}) => setList(results))
        .then ( ({results}) => console.log(results))
        

    },[])

    // console.log ("Список - ", list)

    return (
        <>
            <h1> Загрузил  список покемонов</h1>
        </>
    )
}

