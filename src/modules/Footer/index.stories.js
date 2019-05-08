import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, object } from '@storybook/addon-knobs';
import { Footer } from '../..';

const footerStories = storiesOf('Modules|Footer', module);
const faq = {
  label: 'Help & Faq',
  linkProps: {
    href: 'https://google.fr',
  },
};
const items = [
  {
    id: 1,
    label: 'Terms & Conditions',
    linkProps: {
      href: 'https://google.com',
    },
  },
  {
    id: 2,
    label: 'Privacy Policy',
    linkProps: {
      href: 'https://google.com',
    },
  },
  {
    id: 3,
    label: 'Cookie Policy',
    linkProps: {
      href: 'https://google.com',
    },
  },
];

footerStories.add('base', () => (
  <Footer
    faq={object('faq', faq)}
    items={object('items', items)}
    copyright={text('copyright', '© Eurosport, a Discovery Company 2018 – All rights reserved')}
  />
));
