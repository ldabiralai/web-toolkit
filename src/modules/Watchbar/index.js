import React from 'react';
import styled, { css } from 'react-emotion';
import { rgba } from 'polished';
import PropTypes from 'prop-types';
import * as breakpoints from '../../breakpoints';
import { Carousel, Cards } from '../..';
import { coreLightMinus1, coreNeutral1 } from '../../colors';
import { ReactComponent as Play } from '../../assets/circleplay.svg';

const StyledWrapper = styled.div`
  display: flex;
`;

const StyledPlayIco = styled(Play)`
  width: 16px;
  height: 16px;
  display: block;
  margin-bottom: 8px;
`;

const StyledTitle = styled.div`
  border-bottom: 1px solid ${rgba(coreLightMinus1, 0.3)};
  text-transform: uppercase;
  padding-bottom: 6px;
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

const StyledCarousel = styled(Carousel)`
  max-width: 775px;
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

const generateChildren = (cards, title) => {
  const children = [];
  if (title) {
    children.push(
      <StyledTitle>
        <StyledPlayIco />
        {title}
      </StyledTitle>
    );
  }
  cards.forEach(card => {
    children.push(<Cards.Watchbar card={card} />);
  });
  return children;
};

const WatchBar = ({ cards, title }) => (
  <StyledWrapper>
    {title && (
      <StyledTitle>
        <StyledPlayIco />
        {title}
      </StyledTitle>
    )}
    <StyledCarousel>{generateChildren(cards, title)}</StyledCarousel>
  </StyledWrapper>
);

WatchBar.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.object).isRequired,
  title: PropTypes.string,
};

WatchBar.defaultProps = {
  title: null,
};

export default WatchBar;
