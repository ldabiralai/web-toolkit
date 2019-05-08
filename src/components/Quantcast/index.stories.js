import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, object } from '@storybook/addon-knobs';
import { Quantcast } from '../..';
import config from './mockData/quantcast-translation.json';

const quantcastStories = storiesOf('Components|Quantcast', module);

quantcastStories.add('Quantcast', () => (
  <Quantcast
    scriptUrl={text('scriptUrl', 'https://quantcast.mgr.consensu.org/v14/cmp.js')}
    cmpConf={object('config', config)}
  />
));
