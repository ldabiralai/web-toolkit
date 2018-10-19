import React from 'react';
import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';
import { Link } from '../src';

const linkStories = storiesOf('Link', module);

linkStories.add(
  'configurable',
  withInfo()(() => <Link href={text('href', 'goo.gl')}>{text('Label', 'Hello Link')}</Link>)
);
