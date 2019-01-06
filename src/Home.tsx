import React from 'react';
import ResponsiveContainer from './Layout/ResponsiveContainer';
import Masthead from './Masthead';
import { Segment, Grid } from 'semantic-ui-react';
import Timeline from './Timeline/Timeline';
import * as schema from './Timeline/Schema';

const items: schema.TimelineItem[] = [
  {
    date: new Date('2018-01-01'),
    type: 'role',
    title: 'Test Item',
    description: 'this is a test item'
  },
  {
    date: new Date('2018-06-01'),
    type: 'achievement',
    title: 'Test Item 2',
    description: 'this is another test item'
  }
];

const Home = (props) => (
  <ResponsiveContainer masthead={<Masthead />}>
    <Segment style={{ padding: '8em 0em' }} vertical>
      <Grid container stackable verticalAlign="middle">
        <Grid.Row>
          <Grid.Column width={12} textAlign="center">
            <Timeline items={items} />
          </Grid.Column>
          <Grid.Column width={4}>
            Sidebar here
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
  </ResponsiveContainer>
);

export default Home;
