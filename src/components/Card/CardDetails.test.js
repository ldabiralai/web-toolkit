import React from 'react';
import { shallow } from 'enzyme';
import CardDetails from './CardDetails';

import ChannelIcon from '../../elements/ChannelIcon';

const cardData = {
  img: 'https://i.eurosport.com/2018/10/29/2450727-50913270-2560-1440.jpg?w=200',
  url: '/article/1',
  category: 'Tennis',
  title: 'Youth olympic summer games',
  timestamp: '09:00 - 10:30',
  liveLabel: 'live label',
};

describe('CardDetails', () => {
  it('Renders a carddetail component', () => {
    const wrapper = shallow(<CardDetails card={cardData} />);
    expect(wrapper).toMatchSnapshot();
  });

  describe('Channel icon', () => {
    it('should not render an icon', () => {
      const wrapper = shallow(<CardDetails card={cardData} />);
      expect(wrapper.find(ChannelIcon)).toHaveLength(0);
    });

    it('should render an icon', () => {
      const mockCardData = {
        ...cardData,
        channel: 'E1BR',
      };
      const wrapper = shallow(<CardDetails card={mockCardData} />);
      expect(wrapper.find(ChannelIcon).prop('type')).toEqual('E1BR');
    });
  });

  describe('Description', () => {
    it('should not render a description', () => {
      const wrapper = shallow(<CardDetails card={cardData} />);
      expect(wrapper.html()).not.toContain('Description text');
    });

    it('should render a description', () => {
      const mockCardData = {
        ...cardData,
        description: 'Description text',
      };
      const wrapper = shallow(<CardDetails card={mockCardData} />);
      expect(wrapper.html()).toContain('Description text');
    });
  });
});
