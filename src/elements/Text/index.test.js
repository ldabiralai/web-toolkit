import React from 'react';
import { shallow } from 'enzyme';
import Text from '.';

it('renders a Text', () => {
  expect(shallow(<Text>A text</Text>)).toMatchSnapshot();
});
