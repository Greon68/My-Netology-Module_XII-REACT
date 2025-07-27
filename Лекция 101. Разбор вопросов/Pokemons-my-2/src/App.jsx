
import './App.css'
import { PokemonSearch } from './components/PokemonSearch/PokemonSearch'
import { withPokemon } from './hoc/withPokemon'

const Ditto = withPokemon('ditto')

function App() {
  return (
    <>
   
      <h2>My Pokemons-2</h2>
      <Ditto/>
      <PokemonSearch/>
      
    </>
  )
}

export default App
