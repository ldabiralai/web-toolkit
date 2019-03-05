import React from 'react';
import { shallow } from 'enzyme';
import withMatchMedia from './withMatchMedia';

describe('hocs/withMatchMenid', () => {
  describe('props injection', () => {
    global.matchMedia = () => ({
      matches: true,
      addListener: jest.fn(),
    });

    it('injects the `breakpointMatched` prop by default', () => {
      const Component = withMatchMedia('')(React.Component);

      const wrapper = shallow(<Component />);
      expect(wrapper.props()).toEqual({ breakpointMatched: true });
    });

    it('injects the `custom` prop if provided', () => {
      const Component = withMatchMedia('', 'customPropertyName')(React.Component);

      const wrapper = shallow(<Component />);
      expect(wrapper.props()).toEqual({ customPropertyName: true });
    });
  });

  describe('media change events', () => {
    const listenerFn = jest.fn();

    global.matchMedia = () => ({
      matches: true,
      addListener: listenerFn,
    });

    it('registers a onMediaChange listener for media change', () => {
      const Component = withMatchMedia('')(React.Component);
      const wrapper = shallow(<Component />);
      expect(listenerFn).toHaveBeenCalledWith(wrapper.instance().onMediaChange);
    });

    it('onMediaChange triggers state change', () => {
      const Component = withMatchMedia('')(React.Component);
      const wrapper = shallow(<Component />);
      wrapper.instance().onMediaChange({ matches: true });
      expect(wrapper.state()).toEqual({ matches: true });
      wrapper.instance().onMediaChange({ matches: false });
      expect(wrapper.state()).toEqual({ matches: false });
    });

    it('changes the prop if media match changes', () => {
      const Component = withMatchMedia('')(React.Component);
      const wrapper = shallow(<Component />);
      expect(wrapper.props()).toEqual({ breakpointMatched: true });

      wrapper.setState({ matches: false });
      expect(wrapper.props()).toEqual({ breakpointMatched: false });
    });
  });
});
