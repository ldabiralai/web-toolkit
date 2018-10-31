import React from 'react';
import { shallow } from 'enzyme';
import Footer from '.';

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
