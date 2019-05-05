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
          items={[{ id: 2, name: 'test', sections: [] }]}
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
          items={[{ id: 2, name: 'test', sections: [] }]}
          selectedMenuId={2}
          onMenuSelected={jest.fn()}
        />
      )
    ).toMatchSnapshot();
  });
});
