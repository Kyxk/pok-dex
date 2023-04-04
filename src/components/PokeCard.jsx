import React from 'react';

export default function PokeCard({ nom }) {
  return (
    <>
      <figure className="card">
        <img
          src={`${nom}.png`}
          alt={nom}
          className="card-img"
        />
        <figcaption>{nom}</figcaption>
      </figure>
    </>
  );
}