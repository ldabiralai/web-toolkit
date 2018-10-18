import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import Button from '.';
import { theme } from '../..';

configure({ adapter: new Adapter() });

it('renders a Button', () => {
  expect(shallow(<Button theme={theme}>Click me !</Button>)).toMatchSnapshot();
});
