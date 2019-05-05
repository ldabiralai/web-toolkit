import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import styled from '@emotion/styled';

import { SocialIcon } from '../..';

const Wrapper = styled.div`
  max-width: 500px;
`;

const indexStories = storiesOf('Elements|SocialIcon', module);

indexStories.add(
  'Icons',
  withInfo({ propTablesExclude: [Wrapper] })(() => (
    <>
      <SocialIcon iconType="facebook" iconText="Facebook" />
      <SocialIcon iconType="twitter" iconText="Twitter" />
      <SocialIcon iconType="snapchat" iconText="Snapchat" />
      <SocialIcon iconType="instagram" iconText="Instagram" />
    </>
  ))
);
