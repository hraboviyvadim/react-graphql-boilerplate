import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import App from './components/App/App';

const httpLink = createHttpLink({
  uri: 'https://countries.trevorblades.com/',
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <App name="World" />
  </ApolloProvider>,
  document.getElementById('app')
);

module.hot.accept();
