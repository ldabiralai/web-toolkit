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
    label: 'cookie',
    link: 'https://cookie.fr',
  },
  {
    label: 'Terms & Conditions',
    link: 'https://tm.fr',
  },
  {
    label: 'privacy policy',
    link: 'https://policy.fr',
  },
];

footerStories.add('base', () => <Footer faq={faq} items={items} copyright="copyright" />);
