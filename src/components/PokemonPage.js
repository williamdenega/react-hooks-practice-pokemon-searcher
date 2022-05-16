import React, {useEffect, useState} from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {

  const [pokemonList, setPokemonList] = useState([])
  const [term, setTerm] = useState('')
  
  useEffect(()=>{
    fetch('http://localhost:3001/pokemon')
    .then((r)=> r.json())
    .then(setPokemonList)
  },[])

  const handleSearch =(newSearch)=>{
    setTerm(newSearch)
  }

  const handleNewPokemon = (newPokemon)=>{
    setPokemonList([...pokemonList, newPokemon])
  }

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm  handleNewPokemon={handleNewPokemon}/>
      <br />
      <Search  term={term} changeTerm={handleSearch}/>
      <br />
      <PokemonCollection  pokemonList={pokemonList} term={term}/>
    </Container>
  );
}

export default PokemonPage;
