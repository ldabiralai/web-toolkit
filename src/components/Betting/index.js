import React from 'react';
import styled from 'react-emotion';
import { rgba } from 'polished';
import { coreNeutral9, coreLightMinus1, alto, manatee } from '../../colors';
import { fontFamilies } from '../../typography';

const StyledCard = styled.div`
  background-color: ${coreNeutral9};
  color: ${coreLightMinus1};
  display: flex;
  flex-direction: column;
  flex-grow: 0;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  position: relative;
  overflow: hidden;
  &::before {
    content: '';
    position: absolute;
    top: -30px;
    display: block;
    width: 100%;
    height: 60px;
    background-color: ${alto};
    transform: skew(0, -5deg);
    opacity: 0.04;
    z-index: 1;
  }
`;

const StyledBettingName = styled.div`
  background: #b4292c;
  padding: 11px;
  text-transform: uppercase;
  font-weight: 500;
  letter-spacing: 1px;
  z-index: 2;
`;

const StyledBettingSentence = styled.div`
  font-family: ${fontFamilies.alphaHeadline};
  text-transform: uppercase;
  font-weight: 500;
  font-size: 18px;
  margin-top: 20px;
`;

const StyledBetting = styled.div`
  display: flex;
  align-items: flex-end;
  font-family: ${fontFamilies.alphaHeadline};
  line-height: 30px;
  margin-bottom: 32px;
  justify-content: left;
`;

const StyledTeamName = styled.div`
  text-transform: uppercase;
`;

const StyledFirstTeam = styled(StyledTeamName)`
  float: left;
`;

const StyledSecondTeam = styled(StyledTeamName)`
  float: right;
`;

const StyledChoiceWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledChoiceNumber = styled.div`
  font-size: 13px;
  color: ${manatee};
`;
const StyledChoiceCote = styled.div`
  padding-left: 20px;
  padding-right: 20px;
  font-size: 24px;
  background-color: ${rgba(coreLightMinus1, 0.2)};
  margin: 0 3px;
`;

const Betting = () => (
  <StyledCard>
    <StyledBettingName>Winamax</StyledBettingName>
    <StyledBettingSentence>Pariez avec Winamax</StyledBettingSentence>
    <StyledBetting>
      <StyledFirstTeam>NADAL</StyledFirstTeam>
      <StyledChoiceWrapper>
        <StyledChoiceNumber>1</StyledChoiceNumber>
        <StyledChoiceCote>2.80</StyledChoiceCote>
      </StyledChoiceWrapper>
      <StyledChoiceWrapper>
        <StyledChoiceNumber>2</StyledChoiceNumber>
        <StyledChoiceCote>1.70</StyledChoiceCote>
      </StyledChoiceWrapper>
      <StyledSecondTeam>Federerer</StyledSecondTeam>
    </StyledBetting>
  </StyledCard>
);

export default Betting;
