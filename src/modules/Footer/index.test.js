import React from 'react';
import { shallow } from 'enzyme';
import Footer from '.';

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

describe('Footer', () => {
  it('renders when everything passed in', () => {
    expect(shallow(<Footer faq={faq} items={items} copyright="copyright" />)).toMatchSnapshot();
  });

  it('renders without copyright', () => {
    expect(shallow(<Footer faq={faq} items={items} />)).toMatchSnapshot();
  });

  it('renders with no items', () => {
    expect(shallow(<Footer faq={faq} copyright="copyright" />)).toMatchSnapshot();
  });
});
