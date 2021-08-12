import "./styles.css";
import { useEffect, useState } from "react";
import axios from "axios";
import PokeCard from "./components/PokeCard";

const App = () => {
  const [pokeList, setPokelist] = useState([]);
  const [pokeName, setPokename] = useState("");

  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon/?limit=151")
      .then((res) => {
        setPokelist(res.data.results);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="App">
      <select onChange={(e) => setPokename(e.target.value)}>
        <option value={""}>Nenhum</option>
        {pokeList.map((pokemon) => {
          return (
            <option key={pokemon.name} value={pokemon.name}>
              {pokemon.name}
            </option>
          );
        })}
      </select>
      {pokeName && <PokeCard pokemon={pokeName} />}
    </div>
  );
};

export default App;
