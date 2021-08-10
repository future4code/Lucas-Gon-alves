import { useEffect, useState } from "react";
import axios from "axios";

const PokeCard = (props) => {
  const [pokemon, setPokemon] = useState({});

  const pegaPokemon = (pokeName) => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${pokeName}`)
      .then((res) => setPokemon(res.data))
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    pegaPokemon();
  }, []);

  return (
    <div>
      <h3>{pokemon.name}</h3>
      <h4>{pokemon.weight} kg</h4>
      {pokemon.types && <h4>{pokemon.types[0].type.name}</h4>}
      {pokemon.sprites && (
        <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      )}
    </div>
  );
};

export default PokeCard;
