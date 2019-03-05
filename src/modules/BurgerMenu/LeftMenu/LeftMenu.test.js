/* eslint-disable no-underscore-dangle */
import React from 'react';
import { shallow } from 'enzyme';
import LeftMenu from './LeftMenu';

describe('render', () => {
  it('renders with expected snapshot for mobile', () => {
    expect(
      shallow(
        <LeftMenu
          isMobileMenu
          homePageUrl="http://www.google.com"
          quantCastMenuLabel="privacy settings"
          header={{ items: [] }}
          selectedMenuId={2}
          onMenuSelected={jest.fn()}
        />
      )
    ).toMatchSnapshot();
  });

  it('renders with expected snapshot for desktop', () => {
    expect(
      shallow(
        <LeftMenu
          isMobileMenu={false}
          homePageUrl="http://www.google.com"
          quantCastMenuLabel="privacy settings mobile"
          header={{ items: [] }}
          selectedMenuId={2}
          onMenuSelected={jest.fn()}
        />
      )
    ).toMatchSnapshot();
  });
});

describe('quantcast privacy integration', () => {
  it('should trigger a quantast privacy script', () => {
    const quantCastScript = jest.fn();

    global.window.__cmp = (...args) => quantCastScript(args);

    const wrapper = shallow(
      <LeftMenu
        isMobileMenu={false}
        homePageUrl="http://www.google.com"
        quantCastMenuLabel="my privacy settings"
        header={{ items: [] }}
        selectedMenuId={2}
        onMenuSelected={jest.fn()}
      />
    );

    wrapper.find("[data-test='burger-privacy']").simulate('click');
    expect(quantCastScript).toHaveBeenCalledWith(['displayConsentUi', 2, true]);
  });

  it('does not render quantcast', () => {
    const wrapper = shallow(
      <LeftMenu
        isMobileMenu={false}
        homePageUrl="http://www.google.com"
        quantCastMenuLabel=""
        header={{ items: [] }}
        selectedMenuId={2}
        onMenuSelected={jest.fn()}
      />
    );

    expect(wrapper).toMatchSnapshot();
  });
});
