import { Pokemon } from "../components/Pokemom/Pokemon";

export const withPokemon = (name) => {

    const WithPokemon = () => {
        return < Pokemon name = {name} /> 
    }

    return WithPokemon
}