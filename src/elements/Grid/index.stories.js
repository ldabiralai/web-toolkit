import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { select } from '@storybook/addon-knobs';
import { Grid } from '../..';

const gridStories = storiesOf('Grid', module);

gridStories
  .add(
    'Container',
    withInfo()(() => (
      <Grid.Container>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut laoreet ipsum et ipsum molestie, vel interdum quam
        auctor. Quisque ultricies erat quis commodo rhoncus. Curabitur mauris sem, tincidunt in leo ac, lacinia pulvinar
        mi. Nunc tempus dolor nibh, non tempus turpis fermentum quis. Nam rhoncus mauris eu auctor accumsan. Etiam quis
        volutpat quam, a efficitur purus. Duis elementum accumsan lobortis. Pellentesque luctus erat viverra, feugiat
        augue et, tincidunt tellus. Maecenas in quam et massa lobortis laoreet. Morbi bibendum neque eget efficitur
        mattis. Proin quis gravida lacus. Etiam mattis libero sit amet vulputate pharetra. Vivamus scelerisque placerat
        lectus vel mollis. Nunc dolor diam, volutpat malesuada facilisis non, accumsan quis nunc. Praesent ultricies,
        dolor ut tristique dignissim, enim mi suscipit erat, id mattis tellus augue vitae lectus. Aliquam egestas porta
        dolor, ac lobortis risus pulvinar ut. Nam volutpat est in nunc porttitor, quis porttitor mauris sollicitudin.
        Maecenas lobortis risus sodales neque bibendum aliquet. Fusce et dignissim dolor. Nunc eget tortor congue,
        tincidunt dolor vel, viverra eros. Morbi sit amet lorem in magna lacinia pharetra nec non odio. Aliquam eget
        tortor vel purus commodo consectetur. Phasellus molestie, enim in pharetra porttitor, augue urna elementum urna,
        eu vestibulum ipsum ante vel nulla.
      </Grid.Container>
    ))
  )
  .add(
    'Row with columns',
    withInfo()(() => (
      <Grid.Row>
        <Grid.Column
          tiny={select('tiny', Grid.SIX_COLUMNS, '6')}
          small={select('small', Grid.SIX_COLUMNS, '6')}
          medium={select('medium', Grid.TWELVE_COLUMNS, '6')}
          large={select('large', Grid.TWELVE_COLUMNS, '6')}
          wide={select('wide', Grid.TWELVE_COLUMNS, '3')}
          tinyOffset={select('tiny offset', Grid.SIX_OFFSETS, '0')}
          smallOffset={select('small offset', Grid.SIX_OFFSETS, '0')}
          mediumOffset={select('medium offset', Grid.TWELVE_OFFSETS, '0')}
          largeOffset={select('large offset', Grid.TWELVE_OFFSETS, '0')}
          wideOffset={select('wide offset', Grid.TWELVE_OFFSETS, '0')}
        >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet ex iste magni molestiae veniam! Alias
          cupiditate delectus dolorem eveniet, ex id iure iusto natus possimus quisquam? Aperiam aut autem commodi dolor
          ea, eaque exercitationem itaque maiores non placeat quod repellendus rerum temporibus veniam, voluptatem. Amet
          architecto debitis illum necessitatibus. A asperiores autem delectus dolores dolorum eligendi eos et expedita
          fugit hic impedit mollitia nihil, nulla, officiis possimus quasi quisquam veniam voluptatem. Ab accusamus
          accusantium amet aspernatur corporis debitis dolores earum eligendi error esse est fuga illo ipsa, iste
          mollitia nam necessitatibus optio praesentium quaerat quasi qui quis, repellendus, sint totam ut. Ad culpa cum
          cumque dignissimos dolore et, explicabo fuga illum laboriosam maxime, obcaecati perspiciatis praesentium quos,
          recusandae sequi vel!
        </Grid.Column>
        <Grid.Column tiny="1" small="1" medium="1" large="1" wide="1">
          Lorem ipsum
        </Grid.Column>
        <Grid.Column tiny="1" small="1" medium="1" large="1" wide="1">
          Lorem ipsum
        </Grid.Column>
        <Grid.Column tiny="1" small="1" medium="1" large="1" wide="1">
          Lorem ipsum
        </Grid.Column>
        <Grid.Column tiny="1" small="1" medium="1" large="1" wide="1">
          Lorem ipsum
        </Grid.Column>
        <Grid.Column tiny="1" small="1" medium="1" large="1" wide="1">
          Lorem ipsum
        </Grid.Column>
      </Grid.Row>
    ))
  );
