import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';
import { rgba } from 'polished';
import ChannelIcon from '../../elements/ChannelIcon';
import * as colors from '../../colors';

const StyledContent = styled.div`
  padding: 16px 16px 8px;
  line-height: 1.3;
  flex: 1 auto;
  display: flex;
  flex-direction: column;
`;

const StyledCategory = styled.div`
  font-size: 12px;
  font-weight: bold;
  text-transform: uppercase;
  color: ${colors.turquoiseBlue};
  letter-spacing: 1px;
  margin: 0 0 10px;
`;

const footerBorder = rgba(colors.whiteLilac, 0.15);
const StyledFooter = styled.div`
  flex: 1 auto;
  display: flex;
  align-items: flex-end;
  font-size: 14px;
`;

const StyledDetails = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  border-top: 1px solid ${footerBorder};

  * :nth-child(2) {
    margin-left: 10px;
    padding-left: 10px;
    border-left: 1px solid ${footerBorder};
    padding: 8px;
  }
`;

const StyledTitle = styled.div`
  font-size: 14px;
  font-weight: bold;
  color: ${colors.athensGray};
  margin: 0 0 10px;
`;

const StyledDescription = styled.div`
  color: ${colors.manatee};
  font-size: 12px;
  line-height: 20px;
  margin: 0 0 10px;
`;

const StyledTimeStamp = styled.div`
  padding: 8px 0;
  margin: 0;
  color: ${colors.manatee};
  font-size: 12px;
`;

const CardDetails = ({ card, ...props }) => {
  const { category, title, description, timestamp, channel } = card;
  return (
    <StyledContent {...props}>
      <StyledCategory>{category}</StyledCategory>
      <StyledTitle>{title}</StyledTitle>
      {description && <StyledDescription>{description}</StyledDescription>}
      <StyledFooter>
        <StyledDetails>
          {channel && <ChannelIcon height={15} type={channel} />}
          <StyledTimeStamp>{timestamp}</StyledTimeStamp>
        </StyledDetails>
      </StyledFooter>
    </StyledContent>
  );
};

CardDetails.propTypes = {
  card: PropTypes.shape({
    category: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    timestamp: PropTypes.string,
    channel: PropTypes.string,
  }).isRequired,
};

CardDetails.displayName = 'Cards.Content';

export default CardDetails;
