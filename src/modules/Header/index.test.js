import { shallow } from 'enzyme/build';
import React from 'react';
import Header from '.';

describe('Header', () => {
  it('renders Header', () => {
    expect(shallow(<Header />)).toMatchSnapshot();
  });

  it('should accept other props', () => {
    const component = shallow(<Header data-test-id="header" />);

    expect(component.props()).toHaveProperty('data-test-id', 'header');
  });
});
