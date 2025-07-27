import { Pokemon } from "../Pokemon/Pokemon";

 const withPokemon = (name) => {
  const WithPokemon = () => {
    return <Pokemon name={name} />;
  };

  // WithPokemon.displayName = `WithPokemon(${name})`;

  return WithPokemon;
};
export default withPokemon