import React from 'react';
import { shallow } from 'enzyme';
import { H6 } from './typography';

describe('typography', () => {
  describe('H6', () => {
    it('renders as NOT bold', () => {
      expect(shallow(<H6>Title</H6>)).not.toHaveStyleRule('font-weight', 'bold');
    });

    it('renders the small version as bold', () => {
      expect(shallow(<H6 small>Title</H6>)).toHaveStyleRule('font-weight', 'bold');
    });
  });
});
