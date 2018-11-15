import React from 'react';
import { storiesOf } from '@storybook/react';
import { object } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';
import SubNavigation from './index';

const subNavigationStories = storiesOf('SubNavigation', module);
const items = [
  {
    label: 'Home',
    linkProps: {
      href: '/',
    },
  },
  {
    label: 'Watch',
    linkProps: {
      href: '/watch',
    },
  },
  {
    label: 'What is Eurosport?',
    linkProps: {
      href: '/what',
    },
  },
  {
    label: 'Log in',
    linkProps: {
      href: '/login',
    },
  },
];

subNavigationStories.add('base', withInfo()(() => <SubNavigation items={object('items', items)} />));
