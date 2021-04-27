import React from "react";
import { Menu, Segment } from "semantic-ui-react";
import { NavLink } from "react-router-dom";
const Header = () => {
  return (
    <Segment inverted >
      <Menu inverted secondary>
         <Menu.Item
        //  data-cy="game"
          name="Game"
          as={NavLink}
          to={{pathname: "/game" }}
        />
      </Menu>
    </Segment>
  );
};
export default Header;
