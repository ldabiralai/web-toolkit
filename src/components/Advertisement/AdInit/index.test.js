import React from 'react';
import { mount } from 'enzyme';
import AdInit from '.';

describe('AdInit', () => {
  it('matches snapshot', () => {
    global.window.matchMedia = () => ({ matches: true });
    expect(mount(<AdInit pageType="live" personalizeAds domain="fr" />)).toMatchSnapshot();
  });
});
