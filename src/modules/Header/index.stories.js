/* eslint-disable no-underscore-dangle */
import React from 'react';
import { withInfo } from '@storybook/addon-info';
import { text, object } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import { Header } from '../..';

import menu from '../BurgerMenu/mocks/feed-menu';

const cta = { link: 'www.eurosport.fr', label: 'subscribe' };
storiesOf('Header', module)
  .add('default', withInfo()(() => <Header />))
  .add(
    'configurable',
    withInfo()(() => {
      window.__cmp = {};
      return (
        <Header
          homePageUrl={text('homePageUrl', 'https://www.eurosport.com')}
          menuItems={object('menuItems', menu.header)}
        />
      );
    })
  )
  .add(
    'with CTA',
    withInfo()(() => {
      window.__cmp = {};
      return (
        <Header
          homePageUrl={text('homePageUrl', 'https://www.eurosport.com')}
          cta={object('cta', cta)}
          menuItems={object('menuItems', menu.header)}
        />
      );
    })
  );
