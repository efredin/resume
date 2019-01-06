import React from 'react';
import { Card, Label } from 'semantic-ui-react';
import * as schema from './Schema';

export interface TimelineItemProps {
  item: schema.TimelineItem;
}

const TimelineItem = (props: TimelineItemProps) => {
  const pointing = props.item.type === 'role' ? 'right' : 'left';
  return (
    <Card fluid>
      <Card.Content>
        <Label attached="top" pointing={pointing}>Time</Label>
        <Card.Header>Title</Card.Header>
        <Card.Description>Description</Card.Description>
      </Card.Content>
    </Card>
  );
};

export default TimelineItem;
