import React from 'react';
import styled, { css } from 'react-emotion';
import * as colors from '../../colors';
import { fontFamilies } from '../../typography';
import { Button } from '../..';

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

const StyledPollItems = styled.div`
  position: absolute;
  width: 100%;
  z-index: 2;
`;

const StyledPollItem = styled(Button)`
  background-color: ${colors.blackRussian};
  border: 1px solid ${colors.nobel};
  border-radius: 24px;
  margin-bottom: 10px;
  margin-right: 19px;
  margin-left: 19px;
  color: ${colors.coreLightMinus1};
  font-family: ${fontFamilies.interUi};
  font-size: 12px;
  svg {
    display: none;
  }
  ${props =>
    props.showResults &&
    css`padding: 0;
    border: 0px;
    border-radius: 0;
    background-color: ${colors.actionOneDarkMinus1}
    height: 48px;
    `}
`;

const StyledResult = styled.div`
  background-color: ${colors.actionOneDarkBase};
  width: ${props => props.result};
  height: 100%;
`;

class QuickPoll extends React.Component {
  handleClick = () => null;

  render() {
    // eslint-disable-next-line react/prop-types
    const { title, pollItems, showResults } = this.props;
    return (
      <StyledContainer>
        <StyledBackground />
        <StyledTitle>{title}</StyledTitle>
        <StyledPollItems>
          {pollItems.map(element => (
            <StyledPollItem key={element.option} onClick={this.handleClick} type="secondary" showResults={showResults}>
              {showResults ? <StyledResult result={element.result}>{element.result}</StyledResult> : element.option}
            </StyledPollItem>
          ))}
        </StyledPollItems>
      </StyledContainer>
    );
  }
}

export default QuickPoll;
