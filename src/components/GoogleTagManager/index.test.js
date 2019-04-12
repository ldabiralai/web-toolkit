import React from 'react';
import { render, shallow, mount } from 'enzyme';
import GoogleTagManager from '.';

describe('<GoogleTagManager />', () => {
  it('renders with expected snapshot', () => {
    expect(render(<GoogleTagManager googleTagManagerId="123456" />)).toMatchSnapshot();
  });

  it('should not render when no datalayer is passed', () => {
    const wrapper = shallow(<GoogleTagManager />);
    expect(wrapper.find('GoogleTagManager').exists()).toBeFalsy();
  });

  it('adds the GoogleTagManager script in the page', () => {
    mount(
      <>
        <script />
        <GoogleTagManager googleTagManagerId="123456" />
      </>,
      { attachTo: document.head }
    );
    const GoogleScript = global.document.getElementById('gtmscript');
    expect(GoogleScript).toBeDefined();
  });

  it('adds GoogleTagManager src with the good GTM id', () => {
    mount(
      <>
        <script />
        <GoogleTagManager googleTagManagerId="123456" />
      </>,
      { attachTo: document.head }
    );
    const GoogleScriptSrc = global.document.getElementById('gtmscript').src;
    expect(GoogleScriptSrc).toEqual('https://www.googletagmanager.com/gtm.js?id=123456');
  });
});
