import React from 'react';
import { shallow } from 'enzyme';
import Heading from './Heading';

it('renders a Heading as h1', () => {
  expect(shallow(<Heading as="h1">Heading text</Heading>)).toMatchSnapshot();
});

it('renders a Heading as h2', () => {
  expect(shallow(<Heading as="h2">Heading text</Heading>)).toMatchSnapshot();
});

it('renders a Heading as h3', () => {
  expect(shallow(<Heading as="h3">Heading text</Heading>)).toMatchSnapshot();
});

it('renders a Heading as h4', () => {
  expect(shallow(<Heading as="h4">Heading text</Heading>)).toMatchSnapshot();
});

it('renders a Heading as h5', () => {
  expect(shallow(<Heading as="h5">Heading text</Heading>)).toMatchSnapshot();
});

it('renders a Heading as h6', () => {
  expect(shallow(<Heading as="h6">Heading text</Heading>)).toMatchSnapshot();
});
