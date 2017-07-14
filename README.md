# react apollo pokedex
based on react apollo tutorial

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

## Start it up:
* yarn install
* yarn start

## pokedex:
interacts with a graphql server.

## apollo
encapsulates all graphql data interactions for the components.
this projects demonstrate the small footprint of apollo:
* index.js declaring apollo client and directing it to the graphql service endpoint.
* index.js wrapping data enabled root components with ApolloProvider.
* Pokedex component data powered by apollo with Trainer query and query parameter.

## react router
maps routes to components

## css
using 
* styled-components: pushing css into components in js. programatically adding styles in a component specific way.
* Tachyons: css system that we can just import in the index.js and use anywhere without writing any css.(example: className="tc pa5")
<pre>
  //index.js
  import 'tachyons';
</pre>

