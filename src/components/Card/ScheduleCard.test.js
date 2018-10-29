import React from 'react';
import { shallow } from 'enzyme';
import ScheduleCard from './ScheduleCard';

it('renders a ScheduleCard', () => {
  expect(shallow(<ScheduleCard />)).toMatchSnapshot();
});
