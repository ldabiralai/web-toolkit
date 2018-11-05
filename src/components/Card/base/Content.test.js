import React from 'react';
import { shallow } from 'enzyme';
import Content from './Content';

it('renders a CardContent', () => {
  expect(shallow(<Content>CardContent</Content>)).toMatchSnapshot();
});
