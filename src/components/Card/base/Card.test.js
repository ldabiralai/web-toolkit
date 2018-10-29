import React from 'react';
import { shallow } from 'enzyme';
import Card from './Card';

it('renders a Card', () => {
  expect(shallow(<Card>Card</Card>)).toMatchSnapshot();
});
