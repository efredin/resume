import React from 'react';
import Event from './Event';
import * as schema from './Schema';
import './Timeline.less';

export interface TimelineProps {
  events: schema.TimelineEventItem[];
}

const Timeline = (props: TimelineProps) => {
  const { events } = props;
  return (
    <div className="ui timeline">
      {events.map((event, e) => (
        <Event key={`event-${e}`} 
          event={event} 
          position={event.type === 'role' ? 'left' : 'right'} 
        />
      ))}
    </div>
  );
};

export default Timeline;
