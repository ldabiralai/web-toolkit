import React from 'react';
import { mount } from 'enzyme';

import Quantcast from '.';
import translations from './translations/quantcast-translations.json';

describe('<Quantcast />', () => {
  it('renders the Quantcast component', () => {
    mount(<script />, { attachTo: document.head });
    expect(
      mount(<Quantcast scriptUrl="'https://quantcast.mgr.consensu.org/cmp.js'" cmpConf={translations} />)
    ).toMatchSnapshot();
  });

  it('runs the Quantcast script', () => {
    mount(<script />, { attachTo: document.head });
    mount(<Quantcast scriptUrl="'https://quantcast.mgr.consensu.org/cmp.js'" cmpConf={translations} />);
    // eslint-disable-next-line no-underscore-dangle
    const cmp = window.__cmp;
    expect(cmp).toBeDefined();
  });
});
