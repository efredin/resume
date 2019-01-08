import React from 'react';
import { Card, Icon } from 'semantic-ui-react';
import * as schema from './Schema';

export interface TimelineAchievementProps {
  achievement: schema.TimelineEventAchievement;
}

const TimelineAchievement = (props: TimelineAchievementProps) => {
  const { achievement } = props;
  return (
    <Card.Content className="item">
      <Card.Header>
        <Icon name="trophy" />
        {achievement.title}
      </Card.Header>
      <Card.Description>
        <p>{achievement.description}</p>
      </Card.Description>
    </Card.Content>
  );
};

export default TimelineAchievement;
