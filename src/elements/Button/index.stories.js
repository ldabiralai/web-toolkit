import React from 'react';
import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';
import { Button } from '../..';

const indexStories = storiesOf('Button', module);

indexStories
  .add('primary', withInfo()(() => <Button type="primary">{text('Children', 'Children prop text')}</Button>))
  .add('secondary', withInfo()(() => <Button type="secondary">{text('Children', 'Children prop text')}</Button>));
