import React from 'react';
import { shallow } from 'enzyme';

import VodCompact from './VodCompact';

const mockCardData = {
  img: 'https://i.eurosport.com/2018/10/29/2450727-50913270-2560-1440.jpg?w=200',
  category: 'Tennis',
  title: 'Youth olympic summer games',
  description: 'Description',
  timestamp: '01:09:28',
};

describe('VodCompact card', () => {
  it('Renders a VodCompact card', () => {
    const wrapper = shallow(<VodCompact card={mockCardData} />);
    expect(wrapper).toMatchSnapshot();
  });
});
