import React from 'react';
import { shallow } from 'enzyme';
import RightMenuSection from './RightMenuSection';

it('renders with expected snapshot', () => {
  expect(shallow(<RightMenuSection />)).toMatchSnapshot();
});
