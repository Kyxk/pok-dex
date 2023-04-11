import PokeCard from "./PokeCard";

export default function PokeCardList() {
  const pokemons = [
    {
      name: "charmander",
      type: "fire",
      health: 50,
      attack: 30,
      defense: 20
    },
    {
      name: "squirtle",
      type: "water",
      health: 60,
      attack: 20,
      defense: 30
    },
    {
      name: "bulbasaur",
      type: "grass",
      health: 70,
      attack: 25,
      defense: 25
      },
      {
      name: "new",
      
      
    }
  ];

  return (
    <>
      {pokemons.map((pokemon) => (
        <PokeCard pokemon={pokemon} key={pokemon} />
      ))}
    </>
  );
}