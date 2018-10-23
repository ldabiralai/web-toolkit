import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, select } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';
import { Button } from '../src';

const buttonStories = storiesOf('Button', module);

buttonStories.add(
  'configurable',
  withInfo()(() => (
    <Button type={select('Type', ['primary', 'secondary'], 'primary')}>{text('Children', 'Children prop text')}</Button>
  ))
);
