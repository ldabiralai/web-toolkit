import React from 'react';
import { shallow } from 'enzyme';
import { createMatchers } from 'jest-emotion';
import * as emotion from 'emotion';
import Icon, { BaseIcon, iconMap } from '.';

expect.extend(createMatchers(emotion));

describe('Icon', () => {
  it('should render source for a valid icon type', () => {
    const wrapper = shallow(<Icon className="test" type="e1" />);
    expect(wrapper.find(BaseIcon).prop('src')).toEqual(
      iconMap['e1'].src
    );
  });

  it('should display alt text passed in from props', () => {
    const wrapper = shallow(<Icon className="test" type="e1" alt="test-alt" />);
    expect(wrapper.find(BaseIcon).prop('alt')).toEqual('test-alt');
  });

  it('should display default alt text when not passed in props', () => {
    const wrapper = shallow(<Icon className="test" type="e2" />);
    expect(wrapper.find(BaseIcon).prop('alt')).toEqual('Eurosport 2');
  });

  it('should default width of icon to be the same as height when ratio is not configured for the icon type', () => {
    const wrapper = shallow(<Icon className="test" type="play" height={50} />);
    expect(wrapper).toHaveStyleRule('width', '50px');
  });

  it('should apply correct width of icon when ratio is configured for the icon type', () => {
    const wrapper = shallow(<Icon className="test" type="e2" height={50} />);
    expect(wrapper).toHaveStyleRule('width', '83px');
  });

  it('should apply icon height passed in through props', () => {
    const wrapper = shallow(<Icon className="test" type="e2" height={50} />);
    expect(wrapper).toHaveStyleRule('height', '50px');
  });
});
