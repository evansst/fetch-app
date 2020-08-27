import React from 'react';
import CharacterCard from '../Components/CharacterCard';

export default function CharacterContainer({ characters, ...props }) {

  const characterCards = (characters) => {
    return characters.map(character => {
      return <CharacterCard key={character.id} {...character}/>
    })
  }
  return (
    <ul className="characters-container">
      {characterCards(characters)}
    </ul>
  )
}