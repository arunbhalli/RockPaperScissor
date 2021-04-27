// import React from "react";
import React, { useState } from "react"
import { Segment, Header, Button, Grid} from "semantic-ui-react";
import { Link } from "react-router-dom";
import Game from "./Game"

const Play = () => {
  const [myChoice, setmyChoice] = useState("");

  const playGame = ({myChoice}) => {
    setmyChoice(myChoice);
 }
  return (
    <div className="play">
        <Link to="/game">
          <div
            data-cy="paper"
            onClick={() => playGame("Paper")}
          >paper</div>
        </Link>
        <Link to="/game">
          <div
            data-cy="scissors"
            onClick={() => playGame("Scissor")}
          >Scissor</div>
        </Link>
        <Link to="/game">
          <div
            data-cy="rock"
            onClick={() => playGame("Rock")}
          >Rock</div>
        </Link>
        <Segment>
        <Grid columns="2">
          <Grid.Column>
          <Link>
            <Segment >My choice :{myChoice}</Segment>
          </Link>
          </Grid.Column>
        </Grid>
      </Segment>
      </div>
  );
};

export default Play;
