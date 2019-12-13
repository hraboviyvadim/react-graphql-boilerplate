import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

const COUNTRIES_QUERY = gql`
  {
    countries {
      name
    }
  }
`;

const TestComponent = () => {
  return (
    <Query query={COUNTRIES_QUERY}>
      {({ loading, error, data }) => {
        if (loading) return <div>Fetching</div>;
        if (error) return <div>Error</div>;
        console.log(data);
        return (
          <ul>
            {data.countries.map((country) => (
              <li key={country.name}>{country.name}</li>
            ))}
          </ul>
        );
      }}
    </Query>
  );
};

export default TestComponent;
