import React from 'react';
import PropTypes from 'prop-types';

import CompactCard from './CompactCard';
import play from '../../assets/play.svg';

const VodCard = ({ card }) => <CompactCard card={card} icon={<img src={play} alt="play" height={20} />} />;

VodCard.propTypes = {
  card: PropTypes.shape({
    img: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    timestamp: PropTypes.string,
  }).isRequired,
};

export default VodCard;
