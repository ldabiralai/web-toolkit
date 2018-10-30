import React from 'react';
import { shallow } from 'enzyme';
import ChannelLogo from './ChannelLogo';

it('renders E ChannelLogo as a default', () => {
  expect(shallow(<ChannelLogo />)).toMatchSnapshot();
});

it('renders E1 ChannelLogo', () => {
  expect(shallow(<ChannelLogo channel="E1" />)).toMatchSnapshot();
});

it('renders E2 ChannelLogo', () => {
  expect(shallow(<ChannelLogo channel="E2" />)).toMatchSnapshot();
});
