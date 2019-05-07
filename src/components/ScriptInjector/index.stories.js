import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, boolean } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';
import { ScriptInjector } from '../..';

const stories = storiesOf('Components|ScriptInjector', module);

const innerHTML = `
  (() => alert('hello world'))();
`;

stories.add(
  'ServerSide',
  withInfo('injection place prop is not used for server side renderring')(() => (
    <ScriptInjector
      isServer
      src={text('src', 'url.to.custom.script.js')}
      async={boolean('async', true)}
      innerHTML={text('innerHTML', innerHTML)}
    />
  ))
);

const clientSideScriptSrc = 'scriptInjector.client.side';

stories
  .add(
    'ClientSide - in body',
    withInfo('injectPlace param is used only client - side')(() => (
      <ScriptInjector isServer={false} src={`${clientSideScriptSrc}.in.body`} injectPlace="body" async={false} />
    ))
  )
  .add(
    'ClientSide - async in head',
    withInfo('injectPlace param is used only client - side')(() => (
      <ScriptInjector isServer={false} async src={`${clientSideScriptSrc}.in.head`} />
    ))
  )
  .add(
    'ClientSide - with inner script - in body',
    withInfo('injectPlace param is used only client - side')(() => (
      <ScriptInjector isServer={false} innerHTML={`alert('script injected in body')`} injectPlace="body" />
    ))
  )
  .add(
    'ClientSide - with inner script - in head',
    withInfo()(() => <ScriptInjector isServer={false} innerHTML={`alert('script injected in head')`} />)
  );
