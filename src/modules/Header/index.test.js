import { shallow } from 'enzyme/build';
import React from 'react';
import Header from '.';

describe('Header', () => {
  it('renders Header', () => {
    expect(shallow(<Header />)).toMatchSnapshot();
  });
});
