import React from 'react';
import { shallow } from 'enzyme';
import VodCard from './VodCard';

it('renders a VodCard', () => {
  expect(shallow(<VodCard />)).toMatchSnapshot();
});
