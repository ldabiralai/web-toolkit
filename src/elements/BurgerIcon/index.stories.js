import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import BurgerIcon from './index';

const indexStories = storiesOf('BurgerIcon', module);

indexStories.add(
  'default',
  withInfo()(() => (
    <BurgerIcon
      onClick={e => {
        e.preventDefault();
      }}
    />
  ))
);
