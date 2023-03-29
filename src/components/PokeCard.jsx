//import css//
import React from 'react';

export default function PokeCard({nom}) {

// variable
//state
//useffect
console.log(nom);
    return (
      <>
        <figure className="card">
          <img
            src={nom +'.png'}
            alt={nom}
            className="card-img"
          />
          <figcaption>bulbasaur</figcaption>
        </figure>
      </>
    );
  }
