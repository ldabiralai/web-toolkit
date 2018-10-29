import React from 'react';
import { shallow } from 'enzyme';
import CardContent from './Card.Content';

it('renders a CardContent', () => {
  expect(shallow(<CardContent>CardContent</CardContent>)).toMatchSnapshot();
});
