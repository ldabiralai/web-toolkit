import React from 'react';
import styled from 'react-emotion';
import * as colors from '../../colors';

const StyledContainer = styled.div`
  border-radius: 4px;
  background-color: ${colors.flawlessMahogany};
  /* TO REMOVE */
  width: 633px;
  height: 392px;
`;

const StyledBackground = styled.div`
  height: 100%;
  width: 100%;
  border-radius: 4px;
  background-color: ${colors.coreNeutral9};
  clip-path: polygon(0 11%, 100% 0%, 100% 100%, 0% 100%);
`;

const StyledOption = styled.div`
  text-transform: uppercase;
`;

// eslint-disable-next-line react/prop-types
const QuickPoll = ({ title, options }) => (
  <StyledContainer>
    <StyledBackground>
      {title}
      <div>
        {options.map(option => (
          <StyledOption>{option}</StyledOption>
        ))}
      </div>
    </StyledBackground>
  </StyledContainer>
);

export default QuickPoll;
