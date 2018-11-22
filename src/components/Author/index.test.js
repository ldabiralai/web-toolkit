import { shallow, mount } from 'enzyme/build';
import React from 'react';
import E from '../../assets/channels/E.svg';

import Author from '.';

describe('Author', () => {
  it('renders Author', () => {
    expect(shallow(<Author name="name" img="img" time="time" />)).toMatchSnapshot();
  });
  it('should spread props', () => {
    const wrapper = shallow(<Author name="name" time="time" data-test-id="test" />);
    expect(wrapper.prop('data-test-id')).toEqual('test');
  });
  it('renders Author without avatar', () => {
    const wrapper = mount(<Author name="name" time="time" />);
    expect(wrapper.prop('img')).toEqual(E);
  });
});
