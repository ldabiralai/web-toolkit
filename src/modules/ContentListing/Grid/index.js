import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'react-emotion';
import { breakpoints } from '../../..';

const StyledGrid = styled('div')`
  ${breakpoints.medium(css`
    display: flex;
    flex-wrap: wrap;
    margin-left: -10px;
    margin-right: -10px;
  `)};
`;

const StyledItem = styled('div')`
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

const Grid = ({ children }) => (
  <StyledGrid>
    {React.Children.map(children, item => (
      <StyledItem key={item.key}>{item}</StyledItem>
    ))}
  </StyledGrid>
);

Grid.displayName = 'Grid';

Grid.propTypes = {
  children: PropTypes.arrayOf(PropTypes.node).isRequired,
};

export default Grid;
