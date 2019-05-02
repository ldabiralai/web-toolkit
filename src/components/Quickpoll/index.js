import React from 'react';
import styled from 'react-emotion';
import * as colors from '../../colors';
import { fontFamilies } from '../../typography';

const StyledContainer = styled.div`
  border-radius: 4px;
  background-color: ${colors.flawlessMahogany};
  position: absolute;
  /* TO REMOVE */
  width: 633px;
  height: 392px;
  color: ${colors.coreLightMinus1};
`;

const StyledBackground = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  border-radius: 4px;
  background-color: ${colors.coreNeutral9};
  clip-path: polygon(0 11%, 100% 0%, 100% 100%, 0% 100%);
  z-index: 1;
`;

const StyledTitle = styled.div`
  position: relative;
  font-size: 20px;
  font-family: ${fontFamilies.alphaHeadline};
  margin: 26px 19px;
  z-index: 2;
`;

const StyledOptions = styled.div`
  position: absolute;
  width: 100%;
  z-index: 2;
`;

const StyledOption = styled.div`
  text-transform: uppercase;
  border: 1px solid ${colors.nobel};
  border-radius: 24px;
  margin-bottom: 10px;
  margin-right: 19px;
  margin-left: 19px;
  text-align: center;
  padding-top: 16px;
  padding-bottom: 16px;
`;

// eslint-disable-next-line react/prop-types
const QuickPoll = ({ title, options }) => (
  <StyledContainer>
    <StyledBackground />
    <StyledTitle>{title}</StyledTitle>
    <StyledOptions>
      {options.map(option => (
        <StyledOption key={option}>{option}</StyledOption>
      ))}
    </StyledOptions>
  </StyledContainer>
);

export default QuickPoll;
