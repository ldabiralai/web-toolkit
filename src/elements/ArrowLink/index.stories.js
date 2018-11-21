import React from 'react';
import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';
import { ArrowLink } from '../..';

const indexStories = storiesOf('ArrowLink', module);

indexStories.add(
  'ArrowLink',
  withInfo()(() => <ArrowLink href={text('href', 'goo.gl')}>{text('Label', 'Hello ArrowLink')}</ArrowLink>)
);
