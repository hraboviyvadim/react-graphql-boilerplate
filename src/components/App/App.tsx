import React from 'react';
import TestComponent from '../TestComponent/TestComponent';

interface AppProps {
  name: String;
}

const App = (props: AppProps) => {
  return <TestComponent />;
};

export default App;
