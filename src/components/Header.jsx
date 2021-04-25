import React from "react";
import { Menu, Segment } from "semantic-ui-react";
import { NavLink } from "react-router-dom";
import {  Button, Icon } from 'semantic-ui-react'
const Header = () => {
  return (
    <Segment inverted color="blue">
      <Menu inverted secondary>
         <Menu.Item
          name="Game"
          as={NavLink}
          to={{pathname: "/game" }}
        />
         <Menu.Item
          name="play"
          as={NavLink}
          to={{ pathname: "/play" }}
        />
      </Menu>
    </Segment>
  );
};
export default Header;
