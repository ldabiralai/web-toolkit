import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'react-emotion';
import * as breakpoints from '../../../breakpoints';
import * as colors from '../../../colors';

const StyledGrid = styled.div`
  ${breakpoints.medium(css`
    display: flex;
    flex-wrap: wrap;
    margin-left: -10px;
    margin-right: -10px;
  `)};
`;

const StyledTitle = styled.h3`
  color: ${colors.athensGray};
  font-family: 'ESP AlphaHeadline Tab', sans-serif;
  font-size: 28px;
  line-height: 34px;
  margin-bottom: 24px;
  margin-left: 5px;

  ${breakpoints.large(css`
    font-size: 36px;
    line-height: 44px;
  `)};
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

const Grid = ({ title, children, ...props }) => (
  <div {...props}>
    {title && <StyledTitle>{title}</StyledTitle>}
    <StyledGrid>
      {React.Children.map(children, item => (
        <StyledItem key={item.key}>{item}</StyledItem>
      ))}
    </StyledGrid>
  </div>
);

Grid.displayName = 'Grid';

Grid.defaultProps = {
  title: '',
};

Grid.propTypes = {
  title: PropTypes.string,
  children: PropTypes.arrayOf(PropTypes.node).isRequired,
};

export default Grid;
