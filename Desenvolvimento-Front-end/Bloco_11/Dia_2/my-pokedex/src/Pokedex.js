import React from 'react';
import Pokemon from './Pokemon';

class Pokedex extends React.Component {
  render() {
    const { infoPokemons } = this.props;
    return (
      <div>
        {infoPokemons.map(pokemon => <Pokemon key={pokemon.id} pokemon={pokemon} />)}
      </div>
    );
  }
}

export default Pokedex;