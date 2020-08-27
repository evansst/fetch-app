import React from 'react'

export default function CharacterCard(character) {
  const {
    name,
    image,
    gender,
    species,
    status,
  } = character;

  return (
    <li className="character-card">
      <h3>Name: {name}</h3>
      <img src={image} alt={name}/>
      <h5>Species: {species}</h5>
      <h5>Gender: {gender}</h5>
      <h5>Status: {status}</h5>
    </li>
  );
}