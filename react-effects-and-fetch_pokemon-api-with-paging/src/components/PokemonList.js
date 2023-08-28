import { useEffect, useState } from "react";

export default function PokemonList() {
  const [pokemon, setPokemon] = useState([]);
  const [nextpage, setNextPage] = useState(0);
  const [id, setId] = useState(1);
  useEffect(() => {
    async function loadPokemon() {
      try {
        const response = await fetch(
          `https://pokeapi.co/api/v2/pokemon?offset=${id}`
        );
        const data = await response.json();
        setPokemon(data.results);
      } catch (error) {
        console.log(error);
      }
    }

    loadPokemon();
  }, [id]);

  function handelNext() {
    setId(nextpage + 20);
    setNextPage(id);
    console.log(pokemon);
  }

  function handelPrevious() {
    setId(nextpage - 20);
    setNextPage(id);
    console.log(pokemon);
  }

  return (
    <main>
      <button type="button" onClick={handelPrevious}>
        Previous Page
      </button>
      <button type="button" onClick={handelNext}>
        Next Page
      </button>
      <ul>
        {pokemon.map(({ name }) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
    </main>
  );
}
