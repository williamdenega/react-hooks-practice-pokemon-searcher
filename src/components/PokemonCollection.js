import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

function PokemonCollection({pokemonList,term}) {

  const filteredList = pokemonList.filter((pokemon)=>pokemon.name.includes(term))


  return (
    <Card.Group itemsPerRow={6}>
      {filteredList.map((pokemon)=> <PokemonCard key={pokemon.id} pokemon={pokemon}/>)}
    </Card.Group>
  );
}

export default PokemonCollection;
