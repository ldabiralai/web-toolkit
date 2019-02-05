import React from 'react';
import styled, { css } from 'react-emotion';
import { rgba } from 'polished';
import PropTypes from 'prop-types';
import * as breakpoints from '../../breakpoints';
import { Carousel, Cards } from '../..';
import { coreLightMinus1, coreNeutral1 } from '../../colors';
import { ReactComponent as Play } from '../../assets/circleplay.svg';

const StyledPlayIco = styled(Play)`
  width: 16px;
  height: 16px;
  display: block;
  margin-bottom: 8px;
`;

const StyledTitle = styled.div`
  float: left;
  text-transform: uppercase;
  font-size: 12px;
  line-height: 14px;
  color: ${coreNeutral1};
  width: 100px;
  user-select: none;
  display: none;

  ${breakpoints.large(css`
    display: block;
    margin-right: 16px;
  `)};
`;

const StyledTitleContent = styled.div`
  height: 76px;
  display: table-cell;
  vertical-align: middle;
  ${breakpoints.large(css`
    height: 88px;
  `)};
`;

const StyledTitleText = styled.div`
  padding-bottom: 6px;
  border-bottom: 1px solid ${rgba(coreLightMinus1, 0.3)};
`;

const StyledCarousel = styled(Carousel)`
  ${breakpoints.medium(css`
    ${StyledTitle} {
      display: block;
    }
  `)};
  ${breakpoints.large(css`
    ${StyledTitle} {
      display: none;
      margin-right: inherit;
    }
  `)};
`;

const generateTitle = title => (
  <StyledTitle>
    <StyledTitleContent>
      <StyledPlayIco />
      <StyledTitleText>{title}</StyledTitleText>
    </StyledTitleContent>
  </StyledTitle>
);

const generateChildren = (cards, title) => {
  const children = [];
  if (title) {
    children.push(generateTitle(title));
  }
  cards.forEach(card => {
    children.push(<Cards.Watchbar card={card} />);
  });
  return children;
};

const WatchBar = ({ cards, title }) => (
  <div>
    {title && generateTitle(title)}
    <StyledCarousel>{generateChildren(cards, title)}</StyledCarousel>
  </div>
);

WatchBar.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.object).isRequired,
  title: PropTypes.string,
};

WatchBar.defaultProps = {
  title: null,
};

export default WatchBar;
