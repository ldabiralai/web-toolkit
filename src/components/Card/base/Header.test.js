import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header';

it('renders a CardHeader', () => {
  expect(shallow(<Header>CardHeader</Header>)).toMatchSnapshot();
});
