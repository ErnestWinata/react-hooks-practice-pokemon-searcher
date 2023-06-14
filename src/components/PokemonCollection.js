import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

function PokemonCollection({ pokemons }) {
  return (
    <Card.Group itemsPerRow={6}>
      {pokemons.map((pokemon) => (
        <PokemonCard key={pokemon.id} pokemon={pokemon} />
        ))}
      <h1>Hello From Pokemon Collection</h1>
    </Card.Group>
  );
// }

// function PokemonPage() {
//   return (
//     <Container>
//       <PokemonCollection pokemons={pokemonData} />
//     </Container>
//   );
}
export default PokemonCollection;
