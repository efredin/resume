import React from 'react';
import ResponsiveContainer from './Layout/ResponsiveContainer';
import Masthead from './Masthead';
import { Segment, Grid } from 'semantic-ui-react';
import Timeline from './Timeline/Timeline';
import events from './timelineItems.json';

const Home = () => (
  <ResponsiveContainer masthead={<Masthead />}>
    <Segment style={{ padding: '8em 0em' }} vertical>
      <Grid container centered verticalAlign="top">
        <Grid.Row>
          <Grid.Column computer={14} mobile={16} tablet={16} textAlign="center">
            <Timeline events={events as any} />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
  </ResponsiveContainer>
);

export default Home;
