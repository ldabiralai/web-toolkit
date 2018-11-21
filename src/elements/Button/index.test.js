import React from 'react';
import { shallow } from 'enzyme';
import Button from './index';
import { theme } from '../../index';

it('renders a Button', () => {
  expect(shallow(<Button theme={theme}>Click me !</Button>)).toMatchSnapshot();
});
