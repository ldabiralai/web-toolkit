import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'react-emotion';
import * as breakpoints from '../../../breakpoints';
import * as colors from '../../../colors';
import { H2 } from '../../../typography';
import Link from '../../../elements/Link';
import { ReactComponent as Chevron } from '../../../assets/chevron.svg';

const StyledWrapper = styled.section`
  margin: 48px 0;
`;

const StyledGrid = styled.div`
  ${breakpoints.medium(css`
    display: flex;
    flex-wrap: wrap;
    margin-left: -10px;
    margin-right: -10px;
  `)};
`;

export const StyledTitle = styled(H2)`
  color: ${colors.athensGray};
  margin-bottom: 24px;
  margin-left: 5px;
`;

const StyledItem = styled.div`
  margin-bottom: 20px;

  ${breakpoints.medium(css`
    padding: 0 10px;
    box-sizing: border-box;
    width: 50%;
  `)};

  ${breakpoints.large(css`
    width: 33.3%;
  `)};

  ${breakpoints.wide(css`
    width: 25%;
  `)};
`;

const StyledHeading = styled.div`
  display: flex;
  align-items: baseline;
`;

export const StyledChevron = styled(Chevron)`
  margin-left: 6px;

  path {
    fill: currentColor;
  }
`;

export const StyledLink = styled(Link)`
  margin-left: 40px;
  text-decoration: none;
  color: ${colors.athensGray};
  border-bottom: 2px solid currentColor;
  :hover,
  :active {
    color: ${colors.athensGray};
  }
`;

const Grid = ({ title, subLink, children, ...props }) => (
  <StyledWrapper {...props}>
    <StyledHeading>
      {title && <StyledTitle>{title}</StyledTitle>}
      {subLink && (
        <StyledLink href={subLink.href} linkComponent={subLink.linkComponent}>
          {subLink.text}
          <StyledChevron />
        </StyledLink>
      )}
    </StyledHeading>

    <StyledGrid>
      {React.Children.map(children, item => (
        <StyledItem key={item.key}>{item}</StyledItem>
      ))}
    </StyledGrid>
  </StyledWrapper>
);

Grid.displayName = 'Grid';

Grid.defaultProps = {
  title: '',
  subLink: undefined,
};

Grid.propTypes = {
  title: PropTypes.string,
  children: PropTypes.arrayOf(PropTypes.node).isRequired,
  subLink: PropTypes.shape({
    text: PropTypes.string.isRequired,
    href: PropTypes.string.isRequired,
    linkComponent: PropTypes.func,
  }),
};

export default Grid;
