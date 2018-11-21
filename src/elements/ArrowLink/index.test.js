import React from 'react';
import { shallow } from 'enzyme';
import { theme, ArrowLink } from '../../index';

it('renders a ArrowLink', () => {
  expect(
    shallow(
      <ArrowLink theme={theme} href="/">
        Click me !
      </ArrowLink>
    )
  ).toMatchSnapshot();
});
