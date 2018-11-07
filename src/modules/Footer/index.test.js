import React from 'react';
import { shallow } from 'enzyme';
import Footer from '.';

const faq = {
  label: 'Help & FAQs',
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

  it('should allow extra attibutes to be passed to the faq link (eg for analytics to hook into)', () => {
    const faqWithExtraAttibute = {
      label: 'Help & FAQs',
      linkProps: {
        href: 'https://google.fr',
        'data-adobe-analytics': 'an-adobe-analytics-value',
      },
    };

    const component = shallow(<Footer faq={faqWithExtraAttibute} />);
    const helpButton = component.find({ children: 'Help & FAQs' });

    expect(helpButton.props()).toHaveProperty('data-adobe-analytics', 'an-adobe-analytics-value');
  });

  it('should allow extra attibutes to be passed to an item link (eg for analytics to hook into)', () => {
    const itemWithExtraAttibute = [
      {
        id: 1,
        label: 'Terms & Conditions',
        linkProps: {
          href: 'https://google.fr',
          'data-adobe-analytics': 'an-adobe-analytics-value',
        },
      },
    ];

    const component = shallow(<Footer faq={faq} items={itemWithExtraAttibute} />);
    const itemLink = component.find({ children: 'Terms & Conditions' });

    expect(itemLink.props()).toHaveProperty('data-adobe-analytics', 'an-adobe-analytics-value');
  });
});
