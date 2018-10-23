import React from 'react';
import { shallow } from 'enzyme';
import Button from '.';
import { theme } from '../..';

it('renders a Button', () => {
  expect(shallow(<Button theme={theme}>Click me !</Button>)).toMatchSnapshot();
});
