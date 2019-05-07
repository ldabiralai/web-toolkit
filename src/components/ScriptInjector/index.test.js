import React from 'react';
import { mount } from 'enzyme';
import { ScriptInjector } from '../..';

describe('ScriptInjector', () => {
  describe('server side', () => {
    it('matches default snapshot', () => {
      expect(mount(<ScriptInjector isServer />)).toMatchSnapshot();
    });

    describe('props', () => {
      let wrapper;
      beforeEach(() => {
        wrapper = mount(
          <ScriptInjector
            id="scriptinjector"
            isServer
            async
            src="https://test/script.src"
            innerHTML={'inner html text <b />'}
          />
        );
      });

      it('async', () => {
        expect(wrapper.prop('async')).toBe(true);
      });

      it('src', () => {
        expect(wrapper.prop('src')).toBe('https://test/script.src');
      });

      it('innerHTML', () => {
        expect(wrapper.prop('innerHTML')).toBe('inner html text <b />');
      });
    });
  });

  describe('client side', () => {
    it('matches default snapshot', () => {
      const wrapper = mount(<ScriptInjector isServer={false} />);
      expect(wrapper).toMatchSnapshot();
      wrapper.unmount();
    });

    describe('injectionPlace', () => {
      let wrapper;

      afterAll(() => {
        wrapper.unmount();
      });

      it('HEAD by default', () => {
        wrapper = mount(<ScriptInjector id="scriptinjector" isServer={false} async src="https://test/script.src" />);
        expect(document.getElementById('scriptinjector').parentNode.tagName).toBe('HEAD');

        wrapper.unmount();
        expect(document.getElementById('scriptinjector')).toBe(null);
      });

      it('BODY', () => {
        wrapper = mount(
          <ScriptInjector id="scriptinjector" isServer={false} async src="https://test/script.src" injectPlace="body" />
        );
        expect(document.getElementById('scriptinjector').parentNode.tagName).toBe('BODY');

        wrapper.unmount();
        expect(document.getElementById('scriptinjector')).toBe(null);
      });
    });

    describe('script attributes and innerHTML', () => {
      let wrapper;
      const onLoadSpy = jest.fn();

      beforeEach(() => {
        wrapper = mount(
          <ScriptInjector
            id="scriptinjector"
            isServer={false}
            async
            src="https://test/script.src"
            innerHTML={'inner html text <b />'}
            onLoad={() => onLoadSpy(123)}
          />
        );
      });

      afterEach(() => {
        wrapper.unmount();
      });

      it('has src', () => {
        expect(document.getElementById('scriptinjector').src).toBe('https://test/script.src');
      });

      it('has async', () => {
        expect(document.getElementById('scriptinjector').async).toBe(true);
      });

      it('has innerHTML', () => {
        expect(document.getElementById('scriptinjector').innerHTML).toBe('inner html text <b />');
      });

      it('invokes onLoad', () => {
        wrapper.instance().script.onload();
        expect(onLoadSpy).toHaveBeenCalledWith(123);
      });

      it('does not inject same script id twice', () => {
        const oneMoreWrapper = mount(
          <ScriptInjector
            id="scriptinjector"
            isServer={false}
            async
            src="https://test/script.src"
            innerHTML={'inner html text <b />'}
            onLoad={() => onLoadSpy(123)}
          />
        );

        expect(document.querySelectorAll('script')).toHaveLength(1);
        oneMoreWrapper.unmount();
      });
    });
  });
});
