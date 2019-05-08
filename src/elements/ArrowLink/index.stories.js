import React from 'react';
import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs';
import { ArrowLink } from '../..';

const indexStories = storiesOf('Elements|ArrowLink', module);

indexStories.add('ArrowLink', () => (
  <ArrowLink href={text('href', 'goo.gl')}>{text('Label', 'Hello ArrowLink')}</ArrowLink>
));
