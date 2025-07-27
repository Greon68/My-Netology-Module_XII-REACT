import { useState, } from "react";
import dataPokemon from "./dataPokemon";





const PokemonData = ({ render }) => {
  const [data, setData] = useState([
    {
      name: "Ditto",
      url: "https://i.ytimg.com/vi/YCk8L6VJn9s/hqdefault.jpg"
    },
    {
      name: "Pikachu",
      url: "https://i.pinimg.com/550x/ae/75/62/ae7562584f3b8d6844846206811f78e6.jpg"
    },
  ]);

  // setData(.........)

  return render(data);

// const list = [   {
//     name: "Ditto",
//   },
//   {
//     name: "Pikachu",
//   },]
//   const [data, setData] = useState(list );

// const [data, setData] = useState(dataPokemon);

  // return render(data);

// return render(dataPokemon)
};

export default PokemonData