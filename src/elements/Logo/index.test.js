import { shallow } from 'enzyme/build';
import React from 'react';
import Logo from '.';

describe('Logo', () => {
  it('renders usual Logo by default', () => {
    expect(shallow(<Logo />)).toMatchSnapshot();
  });

  it('renders small Logo', () => {
    expect(shallow(<Logo small />)).toMatchSnapshot();
  });
});
