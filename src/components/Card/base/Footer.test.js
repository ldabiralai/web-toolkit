import React from 'react';
import { shallow } from 'enzyme';
import Footer from './Footer';

it('renders a CardFooter', () => {
  expect(shallow(<Footer>CardFooter</Footer>)).toMatchSnapshot();
});
