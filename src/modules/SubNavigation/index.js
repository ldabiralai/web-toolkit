import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import * as breakpoints from '../../breakpoints';
import * as colors from '../../colors';

const StyledWrapper = styled.nav`
  background: ${colors.brandBase};
  border-top: 1px solid rgba(255, 255, 255, 0.15);
  padding: 12px 18px;

  ${breakpoints.medium(css`
    padding: 16px 32px;
  `)};
`;

const StyledItems = styled.ul`
  display: flex;
`;

const StyledItem = styled.li`
  margin-right: 30px;
  list-style-type: none;
  font-size: 14px;

  ${breakpoints.medium(css`
    font-size: 16px;
  `)};

  &:last-of-type {
    margin-right: 0;
  }
`;

const StyledLink = styled.a`
  color: ${colors.coreNeutral4};
  text-decoration: none;

  :hover {
    color: ${colors.coreLightMinus1};
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
