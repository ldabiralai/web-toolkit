import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'react-emotion';
import { rgba } from 'polished';
import * as breakpoints from '../../breakpoints';
import * as colors from '../../colors';

import CardDetails from './CardDetails';

const StyledWrapper = styled.div`
  position: relative;
  height: 169px;
  display: flex;
  border-radius: 2px;
  overflow: hidden;
  box-shadow: 0 2px 3px 0 ${rgba(colors.ebony, 0.3)};

  ${breakpoints.small(css`
    height: 149px;
  `)};
  ${breakpoints.large(css`
    height: 160px;
  `)};
`;

const StyledImage = styled.div`
  background-image: ${({ img }) => `url(${img})`};
  height: 100%;
  width: 100%;
  background-size: cover;
  background-position: 50% 0;
  display: block;
  position: absolute;
  opacity: 0.35;

  :before {
    content: '';
    position: absolute;
    z-index: 1;
    height: 100%;
    width: 101%;
    background: linear-gradient(
      180deg,
      rgba(21, 23, 38, 0) 0%,
      rgba(21, 23, 38, 0.3) 18.66%,
      rgba(21, 23, 38, 0.85) 100%
    );
    opacity: 0.5;
  }
`;

const StyledCardDetails = styled(CardDetails)`
  padding: 20px 20px 10px;
`;

const ScheduleCard = ({ card, ...props }) => (
  <StyledWrapper {...props}>
    <StyledImage img={card.img} />
    <StyledCardDetails card={card} />
  </StyledWrapper>
);

ScheduleCard.propTypes = {
  card: PropTypes.shape({
    img: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    timestamp: PropTypes.string,
    channel: PropTypes.string,
  }),
};

ScheduleCard.defaultProps = {
  card: {
    description: '',
    timestamp: '',
    channel: '',
  },
};

export default ScheduleCard;
