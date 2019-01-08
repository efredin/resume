import React, { Component } from 'react';
import {
  Responsive,
  Segment,
  Visibility,
  Menu,
  Container,
  Button,
} from 'semantic-ui-react';
import PrimaryMenuItems from './PrimaryMenuItems';

export interface DesktopContainerProps {
  masthead?: any;
}

export default class DesktopContainer extends Component<DesktopContainerProps> {
  state = {
    fixed: false
  };

  hideFixedMenu = () => this.setState({ fixed: false });
  showFixedMenu = () => this.setState({ fixed: true });

  render() {
    const { children, masthead } = this.props;
    const { fixed } = this.state;

    return (
      <Responsive minWidth={Responsive.onlyTablet.minWidth}>
        <Visibility
          once={false}
          onBottomPassed={this.showFixedMenu}
          onBottomPassedReverse={this.hideFixedMenu}
        >
          <Segment
            className="primary top"
            inverted
            textAlign="center"
            vertical
          >
            <Menu
              fixed={fixed ? 'top' : null}
              inverted={!fixed}
              pointing={!fixed}
              secondary={!fixed}
              size="large"
            >
              <Container>
                <PrimaryMenuItems />
                <Menu.Item position="right">
                  <Button as="a" inverted={!fixed} href="https://drive.google.com/open?id=1Y95QFjrXIn0kxNWTwLltlht7v__Z2QyD" target="_blank">
                    Resume
                  </Button>
                </Menu.Item>
              </Container>
            </Menu>
            {masthead}
          </Segment>
        </Visibility>

        {children}
      </Responsive>
    );
  }
}
