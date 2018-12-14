import React from 'react';
import PropTypes from 'prop-types';

import ScheduleCard from './ScheduleCard';
import PlayIcon from '../../elements/PlayIcon';

const VodCard = ({ card, ...props }) => (
  <div {...props}>
    <ScheduleCard card={card} icon={<PlayIcon.PlayIconSimple height={20} />} />
  </div>
);

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
