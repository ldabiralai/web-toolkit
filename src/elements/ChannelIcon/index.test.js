import React from 'react';
import { shallow } from 'enzyme';

import ChannelIcon from '.';
import * as getChannelIcon from './getChannelIcon';

describe('ChannelIcon', () => {
  it('should render default correctly', () => {
    const wrapper = shallow(<ChannelIcon />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should spread props', () => {
    const wrapper = shallow(<ChannelIcon data-test-id="test" />);
    expect(wrapper.prop('data-test-id')).toEqual('test');
  });

  it('should call getChannelIcon with type', () => {
    const originalGetChannelIcon = getChannelIcon.default;
    const getChannelIconSpy = jest.fn();
    getChannelIcon.default = getChannelIconSpy;

    shallow(<ChannelIcon type="E1GB" />);

    getChannelIcon.default = originalGetChannelIcon;
    expect(getChannelIconSpy).toHaveBeenCalledWith('E1GB');
  });
});
