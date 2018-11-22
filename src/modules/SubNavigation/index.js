import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';
import * as colors from '../../colors';

const StyledWrapper = styled.div`
  background: ${colors.bunting};
  border-top: 1px solid rgba(255, 255, 255, 0.15);
  padding: 16px 30px;
`;

const StyledItems = styled.ul`
  display: flex;
`;

const StyledItem = styled.li`
  margin-right: 30px;
  list-style-type: none;

  &:last-of-type {
    margin-right: 0;
  }
`;

const StyledLink = styled.a`
  color: ${colors.manatee};
  text-decoration: none;

  :hover {
    color: white;
  }
`;

const SubNavigation = ({ items, ...props }) => (
  <StyledWrapper {...props}>
    <StyledItems>
      {items.map(({ label, linkProps: { href, ...otherLinkProps } }) => (
        <StyledItem key={label}>
          <StyledLink href={href} {...otherLinkProps}>
            {label}
          </StyledLink>
        </StyledItem>
      ))}
    </StyledItems>
  </StyledWrapper>
);

SubNavigation.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      linkProps: PropTypes.shape({
        href: PropTypes.string.isRequired,
      }).isRequired,
    })
  ).isRequired,
};

SubNavigation.displayName = 'SubNavigation';

export default SubNavigation;
