import { shallow } from 'enzyme/build';
import React from 'react';
import Header from '.';

import menuItems from '../BurgerMenu/mocks/header';
import BurgerMenu from '../BurgerMenu';
import BurgerIcon from '../../elements/BurgerIcon';

describe('Header', () => {
  it('renders Header', () => {
    expect(shallow(<Header />)).toMatchSnapshot();
  });

  describe('with submenu', () => {
    it('renders Header with BurgerMenu', () => {
      const wrapper = shallow(<Header menuItems={menuItems} />);
      expect(wrapper).toMatchSnapshot();
    });

    it('click on BurgerIcon opens a submenu', () => {
      const wrapper = shallow(<Header menuItems={menuItems} />);
      wrapper.find(BurgerIcon).simulate('click', {
        preventDefault: () => {},
      });
      expect(wrapper.find(BurgerMenu)).toHaveLength(1);
      expect(wrapper.find(BurgerMenu).prop('isOpen')).toBe(true);
    });
  });

  describe('with cta', () => {
    it('renders Header with cta', () => {
      const cta = { link: 'www.eurosport.fr', label: 'subscribe' };
      const wrapper = shallow(<Header cta={cta} />);
      expect(wrapper).toMatchSnapshot();
    });
  });

  it('should accept other props', () => {
    const component = shallow(<Header data-test-id="header" />);

    expect(component.props()).toHaveProperty('data-test-id', 'header');
  });
});
