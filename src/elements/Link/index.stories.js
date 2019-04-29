import React from 'react';
import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';
import { Link as OverridableLink } from '../..';

const indexStories = storiesOf('Elements|Link', module);

indexStories
  .add(
    'default Link',
    withInfo()(() => <OverridableLink href={text('href', 'goo.gl')}>{text('Label', 'Default Link')}</OverridableLink>)
  )
  .add(
    'custom Link span',
    withInfo()(() => (
      <OverridableLink linkComponent={props => <span {...props} />}>{text('Label', 'Custom Link')}</OverridableLink>
    ))
  );
