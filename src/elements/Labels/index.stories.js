import React from 'react';
import { storiesOf } from '@storybook/react';
import { object } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';
import { Labels } from '../..';
import { beforeEventLabels, liveEventLabels, afterEventLabels } from './mockData/labels';

const indexStories = storiesOf('Elements|Labels', module);

indexStories
  .add('Before Event', withInfo()(() => <Labels labels={object('labels', beforeEventLabels)} />))
  .add('Live Event', withInfo()(() => <Labels labels={object('labels', liveEventLabels)} />))
  .add('After Event', withInfo()(() => <Labels labels={object('labels', afterEventLabels)} />));
