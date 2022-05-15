import React, { Component } from "react";
import PropTypes from 'prop-types';

class Pokemon extends Component {
  render() {
    const { pokeData } = this.props;
    const { name, type, averageWeight, image } = pokeData;
    return (
      <article className='pokemon'>
        <div>
          <h3>{name}</h3>
          <p>{type}</p>
          <p>{`${averageWeight.value} ${averageWeight.measurementUnit}`}</p>
        </div>
        <img src={image} alt={`${name} sprite`} />
      </article>
    );
  }
}

Pokemon.propTypes = {
  pokeData: PropTypes.shape({
    name: PropTypes.string,
    type: PropTypes.string,
    averageWeight: PropTypes.shape({
      measurementUnit: PropTypes.string,
      value: PropTypes.number,
    }),
    image: PropTypes.string,
  }).isRequired,
};

export default Pokemon;