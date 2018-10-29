import React from 'react';
import { shallow } from 'enzyme';
import CardFooter from './Card.Footer';

it('renders a CardFooter', () => {
  expect(shallow(<CardFooter>CardFooter</CardFooter>)).toMatchSnapshot();
});
