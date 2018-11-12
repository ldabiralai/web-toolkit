import React from 'react';
import { shallow } from 'enzyme';
import ContentCard, { StyledPlayIcon, StyledLiveLabel } from './ContentCard';
import Icon from '../../elements/Icon';
import { theme } from '../../index';

const cardData = {
  img: 'https://i.eurosport.com/2018/10/29/2450727-50913270-2560-1440.jpg?w=200',
  url: 'http://url.com',
  category: 'Tennis',
  title: 'Youth olympic summer games',
  description: 'Description',
  timestamp: '09:00 - 10:30',
  channel: 'E1',
  liveLabel: 'live label',
};

it('renders a Article ContentCard', () => {
  const wrapper = shallow(<ContentCard card={cardData} type="article" />);
  expect(wrapper).toMatchSnapshot();
  expect(wrapper.find(StyledPlayIcon).length).toEqual(0);
});

it('renders a ContentCard with play icon', () => {
  const wrapper = shallow(<ContentCard card={cardData} type="vod" />);
  expect(wrapper.find(StyledPlayIcon).length).toEqual(1);
});

describe('Live Content Card', () => {
  it('renders a live label', () => {
    const wrapper = shallow(<ContentCard card={cardData} type="live" />);
    expect(
      wrapper
        .find(StyledLiveLabel)
        .render()
        .text()
    ).toContain(cardData.liveLabel);
  });

  it('renders a play icon', () => {
    const wrapper = shallow(<ContentCard card={cardData} type="live" />);
    expect(wrapper.find(StyledPlayIcon).length).toEqual(1);
  });

  it('renders a channel logo', () => {
    const wrapper = shallow(<ContentCard card={cardData} type="live" />);
    expect(wrapper.find(Icon).prop('type')).toEqual('E1');
  });
});

describe('linked content card', () => {
  it('should be an a tag', () => {
    const wrapper = shallow(<ContentCard theme={theme} card={cardData} type="vod" />);
    expect(wrapper.render().is('a')).toEqual(true);
  });

  it('should have correct href', () => {
    const wrapper = shallow(<ContentCard theme={theme} card={cardData} type="vod" />);
    expect(wrapper.render().is('a')).toEqual(true);
  });
});
