import React from 'react';

export default function PokeCard({ pokemon })
{  
return (
    <>
    <h1>H1 pas en Gris - SCSS</h1>
      <figure className={`card ${pokemon.type === 'fire' ? 'bg-red-500' : pokemon.type === 'water' ? 'bg-blue-500' : pokemon.type === 'grass' ? 'bg-green-500' : 'bg-gray-500'}`}>
  <img
    src={`${pokemon.name}.png`}
    alt={pokemon.name}
    className="card-img"
    onError={(e) => { e.target.onerror = null; e.target.src = 'unknown.png' }}
  />
  <figcaption>{pokemon.name}</figcaption>
  <h1>H1 Ici en gris - SCSS</h1>
  <p>type:{pokemon.type ?? 'unknown'}</p>
  <p>health:{pokemon.health ?? 'unknown'}</p>
  <p>attack:{pokemon.attack ?? 'unknown'}</p>
  <p>defense:{pokemon.defense ?? 'unknown'}</p>
</figure>
      
      </>
    
  );
}