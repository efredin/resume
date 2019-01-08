import React from 'react';
import { Menu } from 'semantic-ui-react';
import { Link } from 'react-scroll';

const PrimaryMenuItems = () => (
 <>
    <Menu.Item as={Link} to="top" smooth={true}>Home</Menu.Item>
    <Menu.Item as={Link} to="skills" smooth={true}>Skills</Menu.Item>
    <Menu.Item as={Link} to="timeline" smooth={true}>Timeline</Menu.Item>
  </>
);

export default PrimaryMenuItems;