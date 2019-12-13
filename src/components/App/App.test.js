import React from 'react';
import { shallow } from 'enzyme';

import App from './App';

describe('Unit test example', () => {
  it('My Test Case', () => {
    expect(true).toEqual(true);
  });
});

describe('Snapshot test example', () => {
  it('Shallow render', () => {
    const shallowed = shallow(<App name="world3" />);
    expect(shallowed).toMatchSnapshot();
  });
});
