import React from 'react';
import { Feed } from 'semantic-ui-react';
import TimelineItem from './TimelineItem';
import * as schema from './Schema';
import './Timeline.less';

export interface TimelineProps {
  items: schema.TimelineItem[];
}

const Timeline = (props: TimelineProps) => {
  const { items } = props;
  return (
    <Feed className="timeline">
      {items.map((item, i) => (
        <TimelineItem key={i} item={item} />
        // <Grid.Row key={i}>
        //   <Grid.Column width={8}>
        //     {item.type === 'role' && <TimelineItem key={i} item={item} />}
        //   </Grid.Column>
        //   <Grid.Column width={8}>
        //     {item.type === 'achievement' && <TimelineItem key={i} item={item} />}
        //   </Grid.Column>
        // </Grid.Row>
      ))}
    </Feed>
  );
};

export default Timeline;
