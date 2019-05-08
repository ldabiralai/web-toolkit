import React from 'react';
import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs';
import { Link as OverridableLink } from '../..';

const indexStories = storiesOf('Elements|Link', module);

indexStories
  .add('default Link', () => (
    <OverridableLink href={text('href', 'goo.gl')}>{text('Label', 'Default Link')}</OverridableLink>
  ))
  .add('custom Link span', () => (
    <OverridableLink linkComponent={props => <span {...props} />}>{text('Label', 'Custom Link')}</OverridableLink>
  ));
