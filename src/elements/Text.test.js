import React from 'react';
import { shallow } from 'enzyme';
import Text from './Text';

it('renders a Text', () => {
  expect(shallow(<Text>A text</Text>)).toMatchSnapshot();
});
