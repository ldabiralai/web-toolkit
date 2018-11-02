import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, select } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';
import { Heading } from '../index';

const headingStories = storiesOf('Heading', module);

headingStories.add(
  'configurable',
  withInfo()(() => (
    <Heading as={select('Level', ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'], 'h2')}>{text('Text', 'Heading text')}</Heading>
  ))
);
