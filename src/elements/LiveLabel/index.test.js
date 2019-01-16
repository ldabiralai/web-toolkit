import { shallow } from 'enzyme/build';
import React from 'react';
import LiveLabel from '.';

describe('LiveLabel', () => {
  it('renders LiveLabel', () => {
    expect(shallow(<LiveLabel />)).toMatchSnapshot();
  });
});
