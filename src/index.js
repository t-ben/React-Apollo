import React from 'react';
import {render} from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import 'tachyons';
import App from './App';
import Pokedex from './components/pokedex';
import { BrowserRouter as Router, Route} from 'react-router-dom';
//apollo client  setup:
import ApolloClient, { createNetworkInterface } from 'apollo-client';
import { ApolloProvider } from 'react-apollo';

const client = new ApolloClient({
  networkInterface: createNetworkInterface({ uri: 'https://api.graph.cool/simple/v1/cj4ympqygonri0196m2bnt7gz' })
});
// end apollo setup. we just need to wrap the data enabled component/s in a <ApolloProvider> tag

render((
    <ApolloProvider client={client}>
      <Router>
        <Route path='/' component={Pokedex} />
      </Router>
    </ApolloProvider>
  ),
  document.getElementById('root')
);

registerServiceWorker();
