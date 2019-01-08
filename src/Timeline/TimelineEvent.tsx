import React from 'react';
import moment from 'moment';
import TimelineAchievement from './TimelineAchievement';
import { Card, Icon } from 'semantic-ui-react';
import * as schema from './Schema';

export interface TimelineEventProps {
  position: 'left' | 'right';
  event: schema.TimelineEvent;
}

const TimelineGroup = (props: TimelineEventProps) => {
  const { event, position } = props;
  const company = (event as schema.TimelineEvent).company;
  const image = event.image && require(`../images/${event.image}`);
  return (
    <div className={`event ${position}`}>
      <div className="point"></div>
      <Card fluid>
        <Card.Content>
          <Card.Header>
            {moment(event.date).format('MMM YYYY')}
          </Card.Header>
        </Card.Content>
        <Card.Content className="event">
          {event.icon && <Icon name={event.icon} color="blue" />}
          {image && <img src={image} />}
          <Card.Header>{event.title}</Card.Header>
          {company && <Card.Meta>{company}</Card.Meta>}
          <Card.Description>{event.description}</Card.Description>
        </Card.Content>
        {event.achievements && event.achievements.map((item, i) => (
          <TimelineAchievement achievement={item} key={i} />
        ))}
      </Card>
    </div>
  );
};

export default TimelineGroup;
