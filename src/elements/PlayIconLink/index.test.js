import React from 'react';
import { shallow, mount } from 'enzyme';
import PlayIconLink, { DivPlayIconBg, DivTextBg } from '.';

describe('PlayIconLink', () => {
  it('should render icon with link and text passed as children', () => {
    const wrapper = shallow(
      <PlayIconLink href="google.com" target="_blank" title="link title">
        REPLAY
      </PlayIconLink>
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('should not render a without href', () => {
    const wrapper = mount(<PlayIconLink />);
    expect(wrapper.getDOMNode().tagName).toEqual('DIV');
  });

  it('should use background colors provided to component', () => {
    const wrapper = shallow(
      <PlayIconLink bgColorIcon="red" bgColorText="blue">
        REPLAY
      </PlayIconLink>
    );
    expect(
      wrapper
        .dive()
        .find(DivPlayIconBg)
        .prop('bgColorIcon')
    ).toEqual('red');
    expect(
      wrapper
        .dive()
        .find(DivTextBg)
        .prop('bgColorText')
    ).toEqual('blue');
  });
});
