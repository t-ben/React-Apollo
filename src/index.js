import 'babel-polyfill';    //fill for missing things in babel
import React from 'react';
import { render } from 'react-dom';
//import App from"./components/app";
import Pokedex from './components/pokedex';
//import { Router, Route, browserHistory } from 'react-router';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import ApolloClient, { createNetworkInterface } from 'apollo-client';
import { ApolloProvider } from 'react-apollo';

const client = new ApolloClient({
  networkInterface: createNetworkInterface({ uri: 'https://api.graph.cool/simple/v1/cj4ympqygonri0196m2bnt7gz' })
});

render((
    <ApolloProvider client={client}>
      <Router>
        <Route path='/' component={Pokedex} />
      </Router>
    </ApolloProvider>
  ),
  document.getElementById('app')
);