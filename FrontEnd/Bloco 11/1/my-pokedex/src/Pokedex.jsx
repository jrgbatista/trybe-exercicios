import React, { Component } from 'react';
import Pokemon from './Pokemon';

class Pokedex extends Component {
  render() {
    const { pokeData } = this.props;
    return (
      <main className='pokedex'>
        {
          pokeData.map(item => <Pokemon key={item.id} pokeData={item} />)
        }
      </main >
    );
  }
}



export default Pokedex;