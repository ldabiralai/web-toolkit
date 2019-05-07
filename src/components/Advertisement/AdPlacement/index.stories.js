import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { select } from '@storybook/addon-knobs';
import { AdPlacement, AdManager } from '../../..';

const indexStories = storiesOf('Components|Advertisement', module).addParameters({
  backgrounds: { disable: true },
});

indexStories.add(
  'AdPlacement',
  withInfo()(() => (
    <>
      <AdPlacement adType={select('adType', Object.values(AdManager.enums.adTypes), AdManager.enums.adTypes.MPU)} />
    </>
  ))
);
