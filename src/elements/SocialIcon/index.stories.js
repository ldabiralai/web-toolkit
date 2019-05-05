import React from 'react';
import { storiesOf } from '@storybook/react';

import { SocialIcon } from '../..';

const indexStories = storiesOf('Elements|SocialIcon', module);

indexStories.add('Icons', () => (
  <>
    <SocialIcon iconType="facebook" iconText="Facebook" />
    <SocialIcon iconType="twitter" iconText="Twitter" />
    <SocialIcon iconType="snapchat" iconText="Snapchat" />
    <SocialIcon iconType="instagram" iconText="Instagram" />
  </>
));
