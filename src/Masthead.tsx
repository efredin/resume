import React from 'react';
import {
  Container,
  Header,
  Icon,
  Image
} from 'semantic-ui-react';
import headshot from './images/headshot.jpg';
import './Masthead.less';

const Masthead = () => {
  return (
    <Container text className="masthead">
      <Image circular centered size="medium" src={headshot} />
      <Header
        as="h1"
        content="Eric J. Fredin"
        inverted
      />
      <Header
        as="h2"
        content="Software Developer"
        inverted
      />
      <a className="down" href="#timeline">
        <Icon size="huge" name="chevron down" />
      </a>
    </Container>
  );
};

export default Masthead;