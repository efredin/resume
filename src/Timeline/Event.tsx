import React from 'react';
import moment from 'moment';
import Achievement from './Achievement';
import Role from './Role';
import Education from './Education';
import Project from './Project';
import { Card, Icon } from 'semantic-ui-react';
import * as schema from './Schema';

export interface TimelineEventProps {
  position: 'left' | 'right';
  event: schema.TimelineEventItem;
}

const Event = (props: TimelineEventProps) => {
  const { event, position } = props;

  let point;
  switch (event.type) {
    case 'role':
    default:
      point = 'briefcase';
      break;
    case 'education':
      point = 'graduation';
      break;
    case 'project':
      point = 'code';
      break;
  }

  return (
    <Card fluid className={`event ${position}`}>
      <Card.Content>
        <Card.Header>
          {moment(event.date).format('MMM YYYY')}
        </Card.Header>
      </Card.Content>
      <Icon name={point} circular bordered />
      {event.type === 'role' && <Role role={event as schema.TimelineRoleItem} />}
      {event.type === 'education' && <Education education={event as schema.TimelineEducationItem} />}
      {event.type === 'project' && <Project project={event as schema.TimelineProjectItem } />}
      {event.achievements && event.achievements.map((item, i) => (
        <Achievement achievement={item} key={i} />
      ))}
    </Card>
  );
};

export default Event;
