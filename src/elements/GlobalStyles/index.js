import React from 'react';
import { Global } from '@emotion/core';
import globalResetStyles from '../../globalReset';
import { styles as typographyStyles } from '../../typography';

export default () => (
  <>
    <Global styles={globalResetStyles} />
    <Global styles={typographyStyles} />
  </>
);
