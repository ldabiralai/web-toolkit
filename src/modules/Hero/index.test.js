import { shallow } from 'enzyme/build';
import React from 'react';
import Hero from '.';

describe('Hero', () => {
  it('renders Hero', () => {
    expect(shallow(<Hero title="Title" img="Picture" />)).toMatchSnapshot();
  });

  it('should accept other props', () => {
    const component = shallow(<Hero title="Title" img="Picture" data-test-id="hero" />);
    expect(component.props()).toHaveProperty('data-test-id', 'hero');
  });
});
