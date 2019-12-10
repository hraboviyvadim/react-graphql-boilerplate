import React from 'react';

interface AppProps {
  name: String;
}

const App = (props: AppProps) => {
  return <h1>Hello, {props.name}!</h1>;
};

export default App;
