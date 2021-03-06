import React from 'react';
import { shallow } from 'enzyme';

import ScheduleCard from './ScheduleCard';

const mockCardData = {
  img: 'https://i.eurosport.com/2018/10/29/2450727-50913270-2560-1440.jpg?w=200',
  category: 'Tennis',
  title: 'Youth olympic summer games',
  description: 'Description',
  timestamp: '09:00 - 10:30',
  channel: 'E1',
};

describe('Schedule card', () => {
  it('Renders a schedule card', () => {
    const wrapper = shallow(<ScheduleCard card={mockCardData} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should add extra props passed to the component', () => {
    const component = shallow(<ScheduleCard card={mockCardData} data-test="schedule-card" />);
    expect(component.props()).toHaveProperty('data-test', 'schedule-card');
  });
});
