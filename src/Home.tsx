import React from 'react';
import ResponsiveContainer from './Layout/ResponsiveContainer';
import Masthead from './Masthead';
import { Segment, Grid } from 'semantic-ui-react';
import Timeline from './Timeline/Timeline';
import items from './timelineItems.json';

const Home = () => (
  <ResponsiveContainer masthead={<Masthead />}>
    <Segment style={{ padding: '8em 0em' }} vertical>
      <Grid container verticalAlign="top">
        <Grid.Row>
          <Grid.Column width={12} textAlign="center">
            <Timeline items={items as any} />
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
