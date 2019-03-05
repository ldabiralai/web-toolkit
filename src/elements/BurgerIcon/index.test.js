import React from 'react';
import { shallow } from 'enzyme';
import { BurgerIcon } from '../..';

it('<BurgerIcon /> render', () => {
  expect(shallow(<BurgerIcon onClick={() => null} />)).toMatchSnapshot();
});
