import React from 'react';
import { storiesOf } from '@storybook/react';
import { Footer } from '../src';

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

footerStories.add('base', () => <Footer faq={faq} items={items} copyright="copyright" />);
