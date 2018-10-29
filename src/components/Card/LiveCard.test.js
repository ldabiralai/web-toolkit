import React from 'react';
import { shallow } from 'enzyme';
import LiveCard from './LiveCard';

it('renders a LiveCard', () => {
  expect(shallow(<LiveCard />)).toMatchSnapshot();
});
