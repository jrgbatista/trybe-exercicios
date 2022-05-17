import React, { Component } from 'react';
import Pokemon from './Pokemon';
import './pokedex.css';

class Pokedex extends Component {
  state = {
    pokemons: this.props.pokemons,
    currentIndex: 0,
    myListPokemons: this.props.pokemons,
    filter: '',
  }

  next() {
    this.setState((prevState) => {
      let nextIndex = prevState.currentIndex + 1
      prevState.myListPokemons.length - 1 === prevState.currentIndex ? nextIndex = 0 : nextIndex = prevState.currentIndex + 1
      return {
        currentIndex: nextIndex
      }
    })
  }

  filterPokemon(filter) {

    const filteredData = this.state.pokemons.filter(pokemon => {
      if (filter === '') return true
      return pokemon.type === filter
    })

    this.setState({
      filter: filter,
      myListPokemons: filteredData,
      currentIndex: 0,
    })
  }

  listHasLessThanTwo() {
    return this.state.myListPokemons.length < 2;
  }

  getPokemonTypes() {
    const types = this.state.pokemons.map(pokemon => pokemon.type)
    return [...new Set(types)].sort();
  }

  render() {
    const { myListPokemons, currentIndex } = this.state;
    return (
      <section className='pokedex'>
        <div className='pokedex-buttons-panel'>
          <button
            onClick={() => this.filterPokemon('')}
            className='filter-button'
          >All
          </button>
          {this
            .getPokemonTypes().map(pokemonType =>
            (<button
              key={pokemonType}
              onClick={() => this.filterPokemon(pokemonType)}
              className='filter-button'
            >{pokemonType}
            </button>)
            )}
        </div>
        <div>
          <Pokemon key={myListPokemons[currentIndex].id} pokemons={myListPokemons[currentIndex]} />
        </div>
        <div>
          <button
            onClick={() => this.next()}
            disabled={this.listHasLessThanTwo(myListPokemons)}
            className='pokedex-button'
          >Next
          </button>
        </div>
      </section >
    );
  }
}



export default Pokedex;