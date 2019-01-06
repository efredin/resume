import React from 'react';
import {
  Button,
  Container,
  Header,
  Icon
} from 'semantic-ui-react';

const Masthead = () => {
  return (
    <Container text>
      <Header
        as="h1"
        content="Imagine-a-Company"
        inverted
        style={{
          fontSize: '2em',
          fontWeight: 'normal',
          marginBottom: 0,
          marginTop: '1.5em',
        }}
      />
      <Header
        as="h2"
        content="Do whatever you want when you want to."
        inverted
        style={{
          fontSize: '1.5em',
          fontWeight: 'normal',
          marginTop: '0.5em',
        }}
      />
      <Button primary size="huge">
        Get Started
        <Icon name="arrow right" />
      </Button>
    </Container>
  );
};

export default Masthead;