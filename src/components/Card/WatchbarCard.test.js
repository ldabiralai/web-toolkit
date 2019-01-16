import React from 'react';
import { shallow } from 'enzyme';
import WatchbarCard, { StyledLiveLabel } from './WatchbarCard';

const cardData = {
  img: 'https://i.eurosport.com/taiga/MagicBox/Crop/16_9/0_20180710-125830.jpeg?w=640',
  url: '/article/id',
  isLive: false,
  title: 'Darts: BDO World Championship',
  timestamp: '09:00 - 10:30',
  channel: 'E1FR',
  liveLabel: 'live',
};

it('renders a WatchbarCard', () => {
  const wrapper = shallow(<WatchbarCard card={cardData} />);
  expect(wrapper).toMatchSnapshot();
});

it('renders a WatchbarCard with a live label', () => {
  const wrapper = shallow(<WatchbarCard card={{ ...cardData, isLive: true }} />);
  expect(wrapper.find(StyledLiveLabel).length).toEqual(1);
});
