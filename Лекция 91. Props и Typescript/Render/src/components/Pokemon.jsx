import { PokemonData } from "./PokemonData"

export const Pokemon =()=> {

    return (
     
            <PokemonData  render = { data => (
                <ul>
                    {data.map(({ name, url }) => (
                    <li key={url}>{name}</li>
                    ))}
                </ul>
            )}/>
      
    )

}

{/* <PokemonStorage render={data => (
        <ul>
            {data.map(({ name, url }) => (
              <li key={url}>{name}</li>
            ))}
        </ul>
      )}/> */}