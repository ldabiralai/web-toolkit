import React from 'react';
import { shallow } from 'enzyme';
import RightMenu from './RightMenu';

it('renders with expected snapshot', () => {
  expect(shallow(<RightMenu isMobileMenu items={[{ id: 1, name: 'item1', sections: [] }]} />)).toMatchSnapshot();
});

it('renders items for selected menu id', () => {
  expect(
    shallow(
      <RightMenu
        isMobileMenu
        items={[
          {
            id: 1,
            name: 'item1',
            sections: [{ name: 'test', items: [{ item: '1' }, { item: '2' }], columnType: 'column' }],
            menuType: 'menu',
          },
        ]}
        selectedMenuId={1}
      />
    )
  ).toMatchSnapshot();
});
