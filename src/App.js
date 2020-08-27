import React, { Component } from 'react';
import './App.css';
import CharacterContainer from './Containers/CharactersContainer';

const baseURL = 'https://rickandmortyapi.com/api/character/';

export default class App extends Component {
  state ={
    characters: [],
  };

  componentDidMount() {
    fetch(baseURL)
      .then(response => response.json())
      .then(({ results }) => this.setState({
        characters: [...this.state.characters, ...results]
      }))
  }
  
  render() {
    const { characters, } = this.state;

    return (
      <div className="App">
        <h1>Rick and Morty App</h1>
        <CharacterContainer characters={characters} />
      </div>
    );
  }
}
