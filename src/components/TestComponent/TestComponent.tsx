import React, { Fragment } from 'react';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';

interface Country {
  name: string;
  currency: string;
}

const GET_COUNTRIES_QUERY = gql`
  query getCountriesQuery {
    countries {
      name
      currency
    }
  }
`;

const TestComponent = () => {
  const { loading, data } = useQuery(GET_COUNTRIES_QUERY);
  return (
    <Fragment>
      {loading ? (
        <p>Loading ...</p>
      ) : (
        <ul>
          {data &&
            data.countries.map((country: Country) => (
              <li key={country.name}>
                {country.name} ===>
                {country.currency}
              </li>
            ))}
        </ul>
      )}
    </Fragment>
  );
};

export default TestComponent;
