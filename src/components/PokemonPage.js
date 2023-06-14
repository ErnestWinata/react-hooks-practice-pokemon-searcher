import React, { useEffect, useState } from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {
  const [pokemonData, setPokemonData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredPokemons = pokemonData.filter(pokemon => pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  useEffect(() => {
    fetch(`http://localhost:3001/pokemon`)
    .then(response => response.json())
    .then(data => setPokemonData(data));
  }, []);

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm />
      <br />
      <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <br />
      <PokemonCollection pokemons={filteredPokemons} />
    </Container>
  );
}

export default PokemonPage;
