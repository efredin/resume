import React from 'react';
import { Card, Icon } from 'semantic-ui-react';
import * as schema from './Schema';

export interface TimelineEducationProps {
  education: schema.TimelineEducationItem;
}

const Education = (props: TimelineEducationProps) => {
  const { education: role } = props;
  const image = role.image && require(`../images/${role.image}`);
  
  let classes = ['education'];
  if (image || role.icon) {
    classes.push('image');
  }

  return (
    <Card.Content className={classes.join(' ')}>
      {role.icon && <Icon name={role.icon} color="blue" />}
      {image && <img src={image} />}
      <Card.Header>{role.title}</Card.Header>
      <Card.Meta>
        <a href={role.url} target="_blank">{role.institution}</a>
      </Card.Meta>
      <Card.Description>{role.description}</Card.Description>
    </Card.Content>
  );
};

export default Education;
