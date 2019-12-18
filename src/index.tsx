import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import App from './components/App/App';

const httpLink = createHttpLink({
  uri: process.env.CUSTOMER_ACCOUNT_GRAPHQL_ENDPOINT,
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
if (process.env.NODE_ENV !== 'production') {
  module.hot.accept();
}
