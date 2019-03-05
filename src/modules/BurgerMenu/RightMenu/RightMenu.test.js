import React from 'react';
import { shallow } from 'enzyme';
import RightMenu from './RightMenu';

it('renders with expected snapshot', () => {
  expect(shallow(<RightMenu isMobileMenu header={{ socialItem: null, items: [] }} />)).toMatchSnapshot();
});
