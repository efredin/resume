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
            inverted
            textAlign="center"
            style={{ minHeight: 700, padding: '1em 0em' }}
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
                  <Button as="a" inverted>
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
