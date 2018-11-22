import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, select } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';
import { Button } from '../..';

const indexStories = storiesOf('Button', module);

indexStories.add(
  'configurable',
  withInfo()(() => (
    <Button type={select('Type', ['primary', 'secondary'], 'primary')}>{text('Children', 'Children prop text')}</Button>
  ))
);
