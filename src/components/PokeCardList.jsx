import PokeCard from "./PokeCard";

export default function PokeCardList() {
  const pokemons = ["charmander", "squirtle", "bulbasaur"];

  return (
    <>
      {pokemons.map((pokemon) => (
        <PokeCard nom={pokemon} key={pokemon} />
      ))}
    </>
  );
}