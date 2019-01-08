import React from 'react';
import ResponsiveContainer from './Layout/ResponsiveContainer';
import Masthead from './Masthead';
import Timeline from './Timeline/Timeline';
import { Segment, Grid, Header, Icon } from 'semantic-ui-react';
import events from './timeline.json';
import './Home.less';

const Home = () => (
  <ResponsiveContainer masthead={<Masthead />}>
    <Segment vertical id="timeline">
      <Grid container centered>
        <Grid.Column computer={14} mobile={16} tablet={16} textAlign="center">
          <Header as="h2">Timeline</Header>
          <Timeline events={events as any} />
        </Grid.Column>
      </Grid>
    </Segment>
    {/* <Segment vertical id="skills">
      <Grid container centered>
        <Grid.Column>
          <Header as="h2" textAlign="center">Skills</Header>
          <Skills />
        </Grid.Column>
      </Grid>
    </Segment> */}
    {/* <Segment>
      TODO: Tools I use
    </Segment> */}
    <Segment vertical inverted id="footer">
      <Grid container centered stackable>
        <Grid.Column textAlign="center">
          <a target="_blank" href="https://www.facebook.com/eric.fredin">
            <Icon size="big" name="facebook" />
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
        </Grid.Column>
      </Grid>
    </Segment>
  </ResponsiveContainer>
);

export default Home;
