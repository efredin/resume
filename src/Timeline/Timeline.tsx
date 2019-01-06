import React from 'react';
import { Grid } from 'semantic-ui-react';
import TimelineItem from './TimelineItem';
import * as schema from './Schema';
import './Timeline.less';

export interface TimelineProps {
  items: schema.TimelineItem[];
}

const Timeline = (props: TimelineProps) => {
  const { items } = props;
  return (
    <Grid className="timeline">
      {items.map((item, i) => (
        <Grid.Row key={i}>
          <Grid.Column width={8}>
            {item.type === 'role' && <TimelineItem key={i} item={item} />}
          </Grid.Column>
          <Grid.Column width={8}>
            {item.type === 'achievement' && <TimelineItem key={i} item={item} />}
          </Grid.Column>
        </Grid.Row>
      ))}
    </Grid>
  );
};

export default Timeline;
