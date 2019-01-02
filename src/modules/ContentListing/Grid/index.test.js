import React from 'react';
import { shallow } from 'enzyme';
import Grid, { StyledTitle, StyledLink, StyledChevron } from '.';

const children = [<div key="1">card1</div>, <div key="2">card2</div>];

describe('ContentListing Grid', () => {
  it('base grid', () => {
    expect(shallow(<Grid>{children}</Grid>)).toMatchSnapshot();
  });

  it('should pass other props onto Grid', () => {
    expect(shallow(<Grid data-test-id="test">{children}</Grid>).prop('data-test-id')).toEqual('test');
  });

  describe('title', () => {
    it('renders children without title', () => {
      const component = shallow(<Grid>{children}</Grid>);

      expect(component.find(StyledTitle)).toHaveLength(0);
    });

    it('renders children with title', () => {
      const component = shallow(<Grid title="On Now">{children}</Grid>);

      expect(component.find(StyledTitle)).toHaveLength(1);
    });
  });

  describe('subLink', () => {
    it('should render when prop is passed', () => {
      const subLink = {
        text: 'View Schedule',
        href: '/',
        linkComponent: null,
      };
      const component = shallow(<Grid subLink={subLink}>{children}</Grid>);
      const link = component.find(StyledLink);

      expect(link.props()).toEqual({ children: ['View Schedule', <StyledChevron />], href: '/', linkComponent: null });
    });

    it('should not render when prop is not passed', () => {
      const component = shallow(<Grid>{children}</Grid>);

      expect(component.find(StyledLink)).toHaveLength(0);
    });
  });
});
