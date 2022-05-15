import React from 'react';
import Pokedex from './Pokedex';
import pokemons from './data';
import './App.css';

function App() {
  return (
    <main className='App'>
      <h1>Pokedex</h1>
      <Pokedex pokeData={pokemons} />
    </main>
  )
}

export default App;
