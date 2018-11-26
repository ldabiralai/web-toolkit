import { shallow } from 'enzyme/build';
import React from 'react';
import Hero from '.';

describe('Hero', () => {
  it('renders Hero', () => {
    expect(shallow(<Hero title="Title" img="Picture" />)).toMatchSnapshot();
  });
});
