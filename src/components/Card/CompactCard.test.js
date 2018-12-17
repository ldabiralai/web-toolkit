import React from 'react';
import { shallow } from 'enzyme';

import CompactCard from './CompactCard';

const mockCardData = {
  img: 'https://i.eurosport.com/2018/10/29/2450727-50913270-2560-1440.jpg?w=200',
  category: 'Tennis',
  title: 'Youth olympic summer games',
  description: 'Description',
  timestamp: '09:00 - 10:30',
  channel: 'E1',
};

const mockIcon = <div />;

describe('Compact card', () => {
  it('Renders a Compact card', () => {
    const wrapper = shallow(<CompactCard card={mockCardData} icon={mockIcon} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should add extra props passed to the component', () => {
    const component = shallow(<CompactCard card={mockCardData} icon={mockIcon} data-test="test-card" />);
    expect(component.props()).toHaveProperty('data-test', 'test-card');
  });
});
