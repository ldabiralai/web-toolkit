/* eslint-disable no-underscore-dangle */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { object } from '@storybook/addon-knobs';
import { DataLayer } from '../..';
import dataLayerMock from './mocks/dataLayerMock';

const datalayerStories = storiesOf('Components|DataLayer', module).addDecorator(withInfo);

datalayerStories.add('configurable', () => (
  <DataLayer dataLayer={object('dataLayer', dataLayerMock.dataLayer, 'dataLayer prop example')} />
));
