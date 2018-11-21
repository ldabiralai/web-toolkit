import React from 'react';
import { shallow } from 'enzyme';
import { Link as OverridableLink } from '../..';

describe('Link', () => {
  it('renders a Link', () => {
    const link = shallow(<OverridableLink href="/">simple Link</OverridableLink>);
    expect(link).toMatchSnapshot();
  });

  it('renders a default <a/> tag Link', () => {
    const link = shallow(<OverridableLink href="/">simple Link</OverridableLink>);
    expect(link.render().is('a')).toBe(true);
  });

  it('renders a custom <span/> tag Link', () => {
    const link = shallow(<OverridableLink linkComponent={props => <span {...props} />}>simple Link</OverridableLink>);
    expect(link.render().is('span')).toBe(true);
  });
});
