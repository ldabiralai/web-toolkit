import React from 'react';
import { shallow } from 'enzyme';
import CardDetails from './CardDetails';

const cardData = {
  img: 'https://i.eurosport.com/2018/10/29/2450727-50913270-2560-1440.jpg?w=200',
  url: '/article/1',
  category: 'Tennis',
  title: 'Youth olympic summer games',
  timestamp: '09:00 - 10:30',
  liveLabel: 'live label',
};
const mockIcon = <div />;

describe('CardDetails', () => {
  it('Renders a carddetail component', () => {
    const wrapper = shallow(<CardDetails card={cardData} icon={mockIcon} />);
    expect(wrapper).toMatchSnapshot();
  });

  describe('Description', () => {
    it('should not render a description', () => {
      const wrapper = shallow(<CardDetails card={cardData} icon={mockIcon} />);
      expect(wrapper.html()).not.toContain('Description text');
    });

    it('should render a description', () => {
      const mockCardData = {
        ...cardData,
        description: 'Description text',
      };
      const wrapper = shallow(<CardDetails card={mockCardData} icon={mockIcon} />);
      expect(wrapper.html()).toContain('Description text');
    });
  });
});
