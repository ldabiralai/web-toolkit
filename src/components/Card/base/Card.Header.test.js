import React from 'react';
import { shallow } from 'enzyme';
import CardHeader from './Card.Header';

it('renders a CardHeader', () => {
  expect(shallow(<CardHeader>CardHeader</CardHeader>)).toMatchSnapshot();
});
