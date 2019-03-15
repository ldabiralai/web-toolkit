import React from 'react';
import styled from 'react-emotion';
import { rgba } from 'polished';
import PropTypes from 'prop-types';
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
  font-size: 11px;
  line-height: 14px;
  color: ${coreNeutral1};
  width: 100px;
  user-select: none;
  display: none;

  @media (min-width: 900px) {
    font-size: 12px;
    display: block;
    margin-right: 16px;
  }
`;

const StyledTitleContent = styled.div`
  height: 76px;
  display: table-cell;
  vertical-align: middle;
  @media (min-width: 900px) {
    height: 88px;
  }
`;

const StyledTitleText = styled.div`
  padding-bottom: 6px;
  border-bottom: 1px solid ${rgba(coreLightMinus1, 0.3)};
`;

const StyledCarousel = styled(Carousel)`
  ${StyledTitle} {
    display: block;
  }
  @media (min-width: 900px) {
    ${StyledTitle} {
      display: none;
      margin-right: inherit;
    }
  }
`;

const generateTitle = title => (
  <StyledTitle key={title}>
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
  cards.forEach((card, index) => {
    children.push(
      <Cards.Watchbar key={card.title + card.startTime + card.endTime} card={card} trackingPosition={index} />
    );
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
