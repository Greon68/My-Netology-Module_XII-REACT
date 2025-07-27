
import './App.css';
import { PokemonSearch } from './components/PokemonSearch/PokemonSearch';
import withPokemon from './components/hoc/withPokemon';

const Ditto = withPokemon('ditto');
const Pikachu = withPokemon('pikachu');
function App() {
  

  return (
    <>

    <h2> My Pokemons</h2>
    <Ditto/>
    < Pikachu/>
    <PokemonSearch/>
    </>
  )
}

export default App
