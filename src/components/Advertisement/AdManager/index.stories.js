import React from 'react';
import { storiesOf } from '@storybook/react';

import readme from './readme.md';

storiesOf('Components|Advertisement', module)
  .addParameters({
    backgrounds: { disable: true },
  })
  .add('AdManager', () => <div>Ad manager Module - Click Show info</div>, { info: { text: readme } });
