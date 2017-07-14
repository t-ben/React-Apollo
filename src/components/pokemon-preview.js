import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router'
import styled from 'styled-components';

//styled components creates a component out of the tag and injects the css in it for us:
const Img = styled.img`
  max-height: 112px;
`;

export default class PokemonPreview extends React.Component {
  static propTypes = {
    pokemon: PropTypes.object
  }

  render () {
    return (
      <div className="dib mw4 tc black link dim ml1 mr1 mb2 bg-white pa2">
        <div className="db">
          <Img src={this.props.pokemon.url} alt={this.props.pokemon.name} />
        </div>
        <span className="gray">{this.props.pokemon.name}</span>
      </div>
    )
  }
}