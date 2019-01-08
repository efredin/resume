import React from 'react';
import { Card, Icon, List } from 'semantic-ui-react';
import * as schema from './Schema';

export interface SkillsProps {
  skills: schema.TimelineSkillItem[];
}

const Skills = (props: SkillsProps) => {
  const { skills } = props;
  return (
    <Card.Content className="item skill">
      <Card.Header>Skills</Card.Header>
      <Card.Description>
        <List>
          {skills.map((skill, s) => (
            <List.Item key={s}>
              <span className="level">
                <Icon fitted name="star" />
                <Icon fitted name={skill.level > 1 ? 'star' : 'star outline'} />
                <Icon fitted name={skill.level > 2 ? 'star' : 'star outline'} />
              </span>
              {skill.title}
            </List.Item>
          ))}
        </List>
      </Card.Description>
    </Card.Content>
  );
};

export default Skills;
