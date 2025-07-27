import { useState } from 'react'
import { Pokemon } from './components/Pokemon'
import { PokemonData } from './components/PokemonData'
import { PokemonLoadData } from './components/PokemonLoadData'
import PokemonStorage from './components/PokemonStorage'


function App() {
  

  return (  
      // <Pokemon/>
    <div>
      {/* <PokemonStorage render={data => (
        <ul>
            {data.map(({ name, url }) => (
              <li key={url}>{name}</li>
            ))}
        </ul>
      )}/> */}
      {/* <Pokemon/> */}
      {/* <PokemonStorage /> */}
      <PokemonLoadData/>
/
    </div>
 

  )
}

export default App

// const App = () => {
//   return (
//     <div>
//       <PokemonStorage render={data => (
//         <ul>
//             {data.map(({ name, url }) => (
//               <li key={url}>{name}</li>
//             ))}
//         </ul>
//       )}/>
//     </div>
//   );
// }