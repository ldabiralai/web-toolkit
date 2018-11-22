import React from 'react';
import { shallow } from 'enzyme';
import theme from '../../theme';
import ArrowLink from '.';

it('renders a ArrowLink', () => {
  expect(
    shallow(
      <ArrowLink theme={theme} href="/">
        Click me !
      </ArrowLink>
    )
  ).toMatchSnapshot();
});
