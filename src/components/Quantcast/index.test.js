import React from 'react';
import { render, mount } from 'enzyme';

import Quantcast from '.';
import translations from './translations/quantcast-translations.json';

describe('<Quantcast />', () => {
  it('renders the Quantcast component', () => {
    mount(<script />, { attachTo: document.head });
    expect(
      render(<Quantcast scriptUrl="'https://quantcast.mgr.consensu.org/cmp.js'" translations={translations} />)
    ).toMatchSnapshot();
  });
});
