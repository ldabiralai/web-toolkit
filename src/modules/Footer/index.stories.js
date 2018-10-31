import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, object } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';
import { Footer } from '../..';

const footerStories = storiesOf('Footer', module);
const faq = {
  label: 'Help & Faq',
  link: 'https://google.fr',
};
const items = [
  {
    id: 1,
    label: 'cookie',
    link: 'https://cookie.fr',
  },
  {
    id: 2,
    label: 'Terms & Conditions',
    link: 'https://tm.fr',
  },
  {
    id: 3,
    label: 'privacy policy',
    link: 'https://policy.fr',
  },
];

footerStories.add(
  'base',
  withInfo()(() => (
    <Footer
      faq={object('faq', faq)}
      items={object('items', items)}
      copyright={text('copyright', '© Eurosport, a Discovery Company 2018 – All rights reserved')}
    />
  ))
);
