import React from 'react';
import styled from 'react-emotion';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { object, boolean, select } from '@storybook/addon-knobs';
import { ScoreBlocks } from '../..';
import { pastMatchData, liveMatchData, liveMatchDataSet } from './mockData/mockScoreBlockData';

const MATCH_URL =
  'https://www.eurosport.fr/tennis/barcelone-1/2019/live-rafael-nadal-leonardo-mayer_mtc1105580/live.shtml';

const Wrapper = styled.div`
  max-width: 633px;
`;

const scoreBlockStories = storiesOf('Components|Score Block', module);

scoreBlockStories.add(
  'SetsScore',
  withInfo()(() => (
    <Wrapper css={{ maxWidth: '1067px' }}>
      <ScoreBlocks.SetsScore data={object('score data', liveMatchDataSet)} />
    </Wrapper>
  ))
);

scoreBlockStories.add(
  `ScoreBlock - info`,
  withInfo()(() => (
    <Wrapper>
      <ScoreBlocks.ScoreBlock
        matchUrl={MATCH_URL}
        data={object('score data', pastMatchData)}
        isLive={boolean('isLive', false)}
        isWatchable={boolean('isWatchable', false)}
        displayLeftCircle={select('displayLeftCircle', ['won', 'lost', false], false)}
      />
    </Wrapper>
  ))
);
scoreBlockStories.add(
  `ScoreBlock - live`,
  withInfo()(() => (
    <Wrapper>
      <ScoreBlocks.ScoreBlock
        matchUrl={MATCH_URL}
        data={object('score data', liveMatchData)}
        isLive={boolean('isLive', true)}
        isWatchable={boolean('isWatchable', true)}
        displayLeftCircle={select('displayLeftCircle', ['won', 'lost', false], false)}
      />
    </Wrapper>
  ))
);
