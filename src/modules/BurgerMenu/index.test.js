import React from 'react';
import { render, shallow } from 'enzyme';
import BurgerMenuWithMedia, { BurgerMenu } from './index';
import headerMock from './mocks/header';

headerMock.items = [headerMock.items[1]];

describe('<BurgerMenu />', () => {
  it('renders with expected snapshot on mobile 1', () => {
    expect(
      render(<BurgerMenu isOpen onClose={jest.fn()} homePageUrl="" header={headerMock} isMobileMenu />)
    ).toMatchSnapshot();
  });

  it('renders with expected snapshot on desktop', () => {
    expect(
      render(<BurgerMenu isOpen onClose={jest.fn()} homePageUrl="" header={headerMock} isMobileMenu={false} />)
    ).toMatchSnapshot();
  });
});

describe('required `isMobileMenu` prop is injected to <BurgerMenu /> by default', () => {
  global.matchMedia = () => ({ matches: true, addListener: jest.fn() });

  it('has `isMobileMenu` prop defined', () => {
    expect(
      shallow(<BurgerMenuWithMedia header={headerMock} onClose={jest.fn()} homePageUrl="" isOpen />)
        .find(BurgerMenu)
        .prop('isMobileMenu')
    ).toBe(true);
  });
});
