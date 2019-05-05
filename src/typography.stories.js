import React from 'react';
import { storiesOf } from '@storybook/react';
import { Global } from '@emotion/core';
import { typography } from '.';

const typographyStories = storiesOf('Typography', module);

typographyStories.add('typography', () => (
  <>
    <Global styles={typography.global} />
    <typography.H1>H1 – Heading 1</typography.H1>
    <typography.H2>H2 – Heading 2</typography.H2>
    <typography.H3>H3 – Heading 3</typography.H3>
    <typography.H4>H4 – Heading 4</typography.H4>
    <typography.H5>H5 – Heading 5</typography.H5>
    <typography.H6>H6 – LARGE TAG</typography.H6>
    <typography.H6 small>H6 – SMALL TAG</typography.H6>
    <p>Body Text</p>
  </>
));
