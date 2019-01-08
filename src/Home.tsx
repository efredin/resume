import React from 'react';
import ResponsiveContainer from './Layout/ResponsiveContainer';
import Masthead from './Masthead';
import { Segment, Grid, Header, Icon } from 'semantic-ui-react';
import Timeline from './Timeline/Timeline';
import events from './timelineItems.json';
import './Home.less';

const Home = () => (
  <ResponsiveContainer masthead={<Masthead />}>
    <Segment vertical id="skills">
      <Grid container centered>
        <Header as="h2">Skills</Header>
        TODO...
      </Grid>
    </Segment>
    <Segment vertical id="timeline">
      <Grid container centered>
        <Grid.Row>
          <Grid.Column computer={14} mobile={16} tablet={16} textAlign="center">
            <Header as="h2">Timeline</Header>
            <Timeline events={events as any} />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
    <Segment vertical inverted id="footer">
      <Grid container centered stackable>
        <a target="_blank" href="https://www.facebook.com/eric.fredin">
          <Icon size="big" name="facebook" inverteds />
        </a>
        <a target="_blank" href="https://www.linkedin.com/in/fredin/">
          <Icon size="big" name="linkedin" />
        </a>
        <a target="_blank" href="https://github.com/efredin">
          <Icon size="big" name="github" />
        </a>
        <a target="_blank" href="https://stackoverflow.com/users/3092767/efredin">
          <Icon size="big" name="stack overflow" />
        </a>
      </Grid>
    </Segment>
  </ResponsiveContainer>
);

export default Home;
