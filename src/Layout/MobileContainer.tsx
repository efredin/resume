import React, { Component } from 'react';
import {
  Responsive,
  Sidebar,
  Segment,
  Container,
  Menu,
  Icon,
  Button
} from 'semantic-ui-react';
import PrimaryMenuItems from './PrimaryMenuItems';

export interface MobileContainerProps {
  masthead?: any;
}

export default class MobileContainer extends Component<MobileContainerProps> {
  state = {
    sidebarOpened: false
  };

  handleSidebarHide = () => this.setState({ sidebarOpened: false });

  handleToggle = () => this.setState({ sidebarOpened: true });

  render() {
    const { children, masthead } = this.props;
    const { sidebarOpened } = this.state;

    return (
      <Responsive as={Sidebar.Pushable} maxWidth={Responsive.onlyMobile.maxWidth}>
        <Sidebar
          as={Menu}
          animation="push"
          inverted
          onHide={this.handleSidebarHide}
          vertical
          visible={sidebarOpened}
        >
          <PrimaryMenuItems />
          <Menu.Item as="a">Resume</Menu.Item>
        </Sidebar>

        <Sidebar.Pusher dimmed={sidebarOpened}>
          <Segment
            inverted
            textAlign="center"
            style={{ minHeight: 350, padding: '1em 0em' }}
            vertical
          >
            <Container>
              <Menu inverted pointing secondary size="large">
                <Menu.Item onClick={this.handleToggle}>
                  <Icon name="sidebar" />
                </Menu.Item>
                <Menu.Item position="right">
                  <Button as="a" inverted>
                    Resume
                  </Button>
                </Menu.Item>
              </Menu>
            </Container>
            {masthead}
          </Segment>
          {children}
        </Sidebar.Pusher>
      </Responsive>
    );
  }
}
