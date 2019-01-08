import React from 'react';
import { Card, Icon } from 'semantic-ui-react';
import * as schema from './Schema';

export interface ProjectProps {
  project: schema.TimelineProjectItem;
}

const Project = (props: ProjectProps) => {
  const { project } = props;
  const image = project.image && require(`../images/${project.image}`);

  let classes = ['project'];
  if (image || project.icon) {
    classes.push('image');
  }

  return (
    <>
      <Card.Content className={classes.join(' ')}>
        {project.icon && <Icon name={project.icon} color="blue" />}
        {image && <img src={image} />}
        <Card.Header>
          <a href={project.url} target="_blank">{project.title}</a>
        </Card.Header>
        {project.company && <Card.Meta>
          {project.company}
        </Card.Meta>}
        <Card.Description>{project.description}</Card.Description>
      </Card.Content>
    </>
  );
};

export default Project;
