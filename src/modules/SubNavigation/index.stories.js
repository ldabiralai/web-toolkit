import React from 'react';
import { storiesOf } from '@storybook/react';
import { object } from '@storybook/addon-knobs';
import { SubNavigation } from '../..';

const subNavigationStories = storiesOf('Modules|SubNavigation', module);
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

subNavigationStories.add('base', () => <SubNavigation items={object('items', items)} />);
