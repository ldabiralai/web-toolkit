import React from 'react';
import { shallow } from 'enzyme';
import ContentCard, { StyledIcon, StyledLiveLabel } from './ContentCard';
import Icon from '../../elements/Icon';

const cardData = {
  img: 'https://i.eurosport.com/2018/10/29/2450727-50913270-2560-1440.jpg?w=200',
  category: 'Tennis',
  title: 'Youth olympic summer games',
  description: 'Description',
  timestamp: '09:00 - 10:30',
  channel: 'E1',
};

it('renders a Article ContentCard', () => {
  const wrapper = shallow(<ContentCard card={cardData} type="article" />);
  expect(wrapper).toMatchSnapshot();
  expect(wrapper.find(StyledIcon).length).toEqual(0);
});

it('renders a ContentCard with play icon', () => {
  const wrapper = shallow(<ContentCard card={cardData} type="vod" />);
  expect(wrapper.find(StyledIcon).length).toEqual(1);
});

it('renders a ContentCard with live label and channel logo', () => {
  const wrapper = shallow(<ContentCard card={cardData} type="live" />);
  expect(wrapper.find(StyledLiveLabel).length).toEqual(1);
  expect(wrapper.find(StyledIcon).length).toEqual(1);
  expect(wrapper.find(Icon).prop('type')).toEqual('E1');
});