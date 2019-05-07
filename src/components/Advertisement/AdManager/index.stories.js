import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import readme from './readme.md';

storiesOf('Components|Advertisement', module)
  .addParameters({
    backgrounds: { disable: true },
  })
  .add('AdManager', withInfo({ text: readme })(() => <div>Ad manager Module - Click Show info</div>));
