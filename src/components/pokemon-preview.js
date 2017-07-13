import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router'

export default class PokemonPreview extends React.Component {
  static propTypes = {
    pokemon: PropTypes.object
  }

  render () {
    return (
      <div className="dib mw4 tc black link dim ml1 mr1 mb2 bg-white pa2">
        <div className="db">
          <img src={this.props.pokemon.url} alt={this.props.pokemon.name} />
        </div>
        <span className="gray">{this.props.pokemon.name}</span>
      </div>
    )
  }
}