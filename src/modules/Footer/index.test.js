import React from 'react';
import { shallow } from 'enzyme';
import Footer from '.';

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
