import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { text, object, boolean } from '@storybook/addon-knobs';
import { QuickPoll } from '../..';

const choices = [
  { id: 123451, choice: 'Nadal' },
  { id: 123452, choice: 'Djokovic' },
  { id: 123453, choice: 'Zverev' },
  { id: 123454, choice: 'Federer' },
  { id: 123455, choice: 'Other' },
];

const choicesWithResults = [
  { id: 123451, choice: 'Nadal', result: '50%' },
  { id: 123452, choice: 'Djokovic', result: '47%' },
  { id: 123453, choice: 'Zverev', result: '34%' },
  { id: 123454, choice: 'Federer', result: '16%' },
  { id: 123455, choice: 'Other', result: '1%' },
];

const quickPoll = storiesOf('Components|QuickPoll', module).addDecorator(withInfo);

quickPoll.add('QuickPoll', () => (
  <QuickPoll
    title={text('title', 'Who will win the 2019 French Open?')}
    choices={object('choices', choices)}
    // eslint-disable-next-line no-alert
    onChoiceClick={id => alert(`You clicked on ${id}`)}
  />
));

quickPoll.add('QuickPoll with results', () => (
  <QuickPoll
    title={text('title', 'Who will win the 2019 French Open?')}
    choices={object('choices', choicesWithResults)}
    showResults={boolean('showResults', true)}
  />
));
