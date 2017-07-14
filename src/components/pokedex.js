import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
//apollo client stuff
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
//
import PokemonPreview from './pokemon-preview';

const Title = styled.div`
  color: #7F7F7F;
  font-size: 32px;
  font-weight: 300;
`;

class Pokedex extends React.Component {
  static propTypes = {
    //expecting apollo to inject a data object with loading, error and Trainer object 
    // in it as we ask for in our query:
    data: PropTypes.shape({
      loading: PropTypes.bool,
      error: PropTypes.object,
      Trainer: PropTypes.object
    }).isRequired
  }
  render() {
    if (this.props.data.loading) {
      return (<div>Loading...</div>);
    }
    if (this.props.data.error) {
      console.log(this.props.data.error);
      return (<div>an unexpected error occured</div>);
    }
    return (
      <div className="w-100 bg-light-gray min-vh-100">
        <Title className="tc pa5">
          Hey {this.props.data.Trainer.name}, there are {this.props.data.Trainer.ownedPokemons.length} Pokemons in your pokedex
        </Title>
        <div>
          {this.props.data.Trainer.ownedPokemons.map(pokemon => {            
            //return (<p key={pokemon.id}>{pokemon.name}</p>);
            return (<PokemonPreview key={pokemon.id} pokemon={pokemon}></PokemonPreview>);
          })}
        </div>
      </div>
    );
  }
}
//apollo graphql query as a string wrapped in gql:
// $name is the query parameter
const TrainerQuery = gql(`
  query TrainerQuery($name: String!) {
    Trainer(name: $name){
      name
      ownedPokemons{
        id
        name
        url     
      }
    }
  }
`);
//let apollo inject its stuff (data) using out query:
const PokedexWithData = graphql(TrainerQuery, {
  options: {
    variables: { //send the query parameter/s here:
      name: "tal.benavraham@gmail.com"
    }
  }
})(Pokedex);
export default PokedexWithData;