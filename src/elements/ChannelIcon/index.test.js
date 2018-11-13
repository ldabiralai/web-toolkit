import React from 'react';
import { shallow } from 'enzyme';
import ChannelIcon, { iconMap } from '.';

describe('ChannelIcon', () => {
  it('should render source for a valid icon type', () => {
    const wrapper = shallow(<ChannelIcon type="E1" height={50} />);
    expect(wrapper.prop('src')).toEqual(iconMap.E1.src);
  });

  it('should render generic eurosport logo when type is unkown', () => {
    const wrapper = shallow(<ChannelIcon type="unknown" height={50} />);
    expect(wrapper.prop('src')).toEqual(iconMap.E.src);
  });

  it('should display alt text', () => {
    const wrapper = shallow(<ChannelIcon height={50} />);
    expect(wrapper.prop('alt')).toEqual('Eurosport');
  });

  it('should apply correct width of icon when ratio is configured for the icon type', () => {
    const wrapper = shallow(<ChannelIcon type="E2" height={50} />);
    expect(wrapper).toHaveStyleRule('width', '83px');
  });

  it('should apply icon height passed in through props', () => {
    const wrapper = shallow(<ChannelIcon height={50} />);
    expect(wrapper).toHaveStyleRule('height', '50px');
  });
});
