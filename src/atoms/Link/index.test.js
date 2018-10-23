import React from 'react';
import { shallow } from 'enzyme';
import Link from '.';
import { theme } from '../..';

it('renders a Link', () => {
  expect(
    shallow(
      <Link theme={theme} href="/">
        Click me !
      </Link>
    )
  ).toMatchSnapshot();
});
