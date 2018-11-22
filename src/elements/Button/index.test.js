import React from 'react';
import { shallow } from 'enzyme';
import theme from '../../theme';
import Button from '.';

it('renders a Button', () => {
  expect(shallow(<Button theme={theme}>Click me !</Button>)).toMatchSnapshot();
});
