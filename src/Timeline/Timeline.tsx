import React from 'react';
import TimelineEvent from './TimelineEvent';
import * as schema from './Schema';
import './Timeline.less';

export interface TimelineProps {
  events: schema.TimelineEvent[];
}

const Timeline = (props: TimelineProps) => {
  const { events } = props;
  return (
    <div className="ui timeline">
      {events.map((event, i) => (
        <TimelineEvent key={i} 
          event={event} 
          position={event.type === 'role' ? 'left' : 'right'} 
        />
      ))}
    </div>
  );
};

export default Timeline;
