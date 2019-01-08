import React from 'react';
import {
  Container,
  Header,
  Icon,
  Image
} from 'semantic-ui-react';
import { Link } from 'react-scroll';
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
      <Link className="down" to="timeline" smooth={true}>
        <Icon size="huge" name="chevron down" />
      </Link>
    </Container>
  );
};

export default Masthead;