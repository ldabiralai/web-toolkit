/* eslint-disable no-underscore-dangle */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { text } from '@storybook/addon-knobs';
import { Quantcast } from '../..';
import translations from './translations/quantcast-translations.json';

const quantcastStories = storiesOf('Quantcast', module).addDecorator(withInfo);

quantcastStories.add('Quantcast', () => (
  <Quantcast
    scriptUrl={text('scriptUrl', 'https://quantcast.mgr.consensu.org/cmp.js')}
    cmpConf={translations}
    languageCode={text('languageCode', 'fr')}
  />
));
