import React from 'react';
import { shallow } from 'enzyme';
import Icon, { iconMap } from '.';

describe('Icon', () => {
  it('should render source for a valid icon type', () => {
    const wrapper = shallow(<Icon className="test" type="E1" height={50} />);
    expect(wrapper.prop('src')).toEqual(iconMap.E1.src);
  });

  it('should not render with an invalid icon type', () => {
    const wrapper = shallow(<Icon className="test" type="unknown" height={50} />);
    expect(wrapper.html()).toBeNull();
  });

  it('should display alt text passed in from props', () => {
    const wrapper = shallow(<Icon className="test" type="E1" alt="test-alt" height={50} />);
    expect(wrapper.prop('alt')).toEqual('test-alt');
  });

  it('should display default alt text when not passed in props', () => {
    const wrapper = shallow(<Icon className="test" type="E2" height={50} />);
    expect(wrapper.prop('alt')).toEqual('Eurosport 2');
  });

  it('should apply correct width of icon when ratio is configured for the icon type', () => {
    const wrapper = shallow(<Icon className="test" type="E2" height={50} />);
    expect(wrapper).toHaveStyleRule('width', '83px');
  });

  it('should apply icon height passed in through props', () => {
    const wrapper = shallow(<Icon className="test" type="E2" height={50} />);
    expect(wrapper).toHaveStyleRule('height', '50px');
  });
});
