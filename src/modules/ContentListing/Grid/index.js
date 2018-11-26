import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'react-emotion';
import * as breakpoints from '../../../breakpoints';
import * as colors from '../../../colors';
import { H2 } from '../../../typography';

const StyledWrapper = styled.div`
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

const StyledTitle = styled(H2)`
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

const Grid = ({ title, children, ...props }) => (
  <StyledWrapper {...props}>
    {title && <StyledTitle>{title}</StyledTitle>}
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
};

Grid.propTypes = {
  title: PropTypes.string,
  children: PropTypes.arrayOf(PropTypes.node).isRequired,
};

export default Grid;
