import { shallow } from 'enzyme/build';
import React from 'react';
import Logo from '.';

describe('Logo', () => {
  it('renders Logo', () => {
    expect(shallow(<Logo />)).toMatchSnapshot();
  });
});
