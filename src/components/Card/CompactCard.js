import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';
import { rgba } from 'polished';
import * as colors from '../../colors';

import CardDetails from './CardDetails';

const StyledWrapper = styled.div`
  position: relative;
  height: 100%;
  min-height: 169px;
  display: flex;
  border-radius: 2px;
  overflow: hidden;
  box-shadow: 0 2px 3px 0 ${rgba(colors.ebony, 0.3)};
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
  z-index: 0;

  :before {
    content: '';
    position: absolute;
    z-index: 1;
    height: 100%;
    width: 101%;
    background: linear-gradient(
      180deg,
      transparent,
      ${rgba(colors.mirage, 0.3)} 18.66%,
      ${rgba(colors.mirage, 0.85)} 100%
    );
    opacity: 0.5;
  }
`;

const StyledCardDetails = styled(CardDetails)`
  padding: 20px 20px 10px;
  z-index: 1;
`;

const CompactCard = ({ card, icon, ...props }) => (
  <StyledWrapper {...props}>
    <StyledImage img={card.img} />
    <StyledCardDetails card={card} icon={icon} />
  </StyledWrapper>
);

CompactCard.propTypes = {
  card: PropTypes.shape({
    img: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    timestamp: PropTypes.string,
  }).isRequired,
  icon: PropTypes.node.isRequired,
};

export default CompactCard;
