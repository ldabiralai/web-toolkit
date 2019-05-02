import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { text, array } from '@storybook/addon-knobs';
import { QuickPoll } from '../..';

const options = ['Nadal', 'Djokovic', 'Zverev', 'Federer', 'Other'];

const quickPoll = storiesOf('Components|QuickPoll', module).addDecorator(withInfo);

quickPoll.add('QuickPoll', () => (
  <QuickPoll title={text('title', 'Who will win the 2019 French Open?')} options={array('options', options)} />
));
