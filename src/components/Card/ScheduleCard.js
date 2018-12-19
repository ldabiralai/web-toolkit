import React from 'react';
import PropTypes from 'prop-types';

import ChannelIcon from '../../elements/ChannelIcon';
import CompactCard from './CompactCard';

const ScheduleCard = ({ card, ...props }) => (
  <CompactCard card={card} icon={<ChannelIcon height={15} type={card.channel} />} {...props} />
);

ScheduleCard.propTypes = {
  card: PropTypes.shape({
    img: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    timestamp: PropTypes.string,
    channel: PropTypes.string,
  }).isRequired,
};

export default ScheduleCard;
