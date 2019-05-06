import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import styled from 'react-emotion';
import { Betting } from '../..';

const betting = storiesOf('Components|Betting', module).addDecorator(withInfo);

const Wrapper = styled.div`
  max-width: 500px;
`;

const doubleChoiceData = {
  sponsor: {
    name: 'Betline',
    backgroundColor: '#b4292c',
    textColor: '#ffffff',
  },
  sentences: ['Pariez !', 'PARIEZ AVEC Betline'],
  choices: [
    { number: 1, cote: 2.8, label: 'Nadal', position: 'left' },
    { number: 2, cote: 1.7, label: 'Federer', position: 'right' },
  ],
};

const tripleChoiceData = {
  ...doubleChoiceData,
  choices: [
    { number: 1, cote: 2.8, label: 'Nadal', position: 'left' },
    { number: 2, cote: 4.9 },
    { number: 3, cote: 1.7, label: 'Federer', position: 'right' },
  ],
};

const alternativeLogo = {
  ...doubleChoiceData,
  sponsor: {
    name: 'AlterBet',
    backgroundColor: '#6decb9',
    textColor: '#3c3c3c',
  },
  sentences: ['Alternate with AlterBet !', 'AlterBet for the BETter'],
};

betting
  .add('Double choice', () => (
    <Wrapper>
      <Betting {...doubleChoiceData} />
    </Wrapper>
  ))
  .add('Triple choice', () => (
    <Wrapper>
      <Betting {...tripleChoiceData} />
    </Wrapper>
  ))
  .add('Alternative brand', () => (
    <Wrapper>
      <Betting {...alternativeLogo} />
    </Wrapper>
  ));
