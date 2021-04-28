// import React from "react";
import React, { useState } from "react";
import { Segment, Grid } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
// import Game from "../components/Game"
const Play = () => {
  const [myChoice, setmyChoice] = useState("");
  const [computer, setComputer] = useState("");

  const playGame = (myChoice) => {
    setmyChoice(myChoice);
  };
  const newComputerChoice = () => {
    const choices = ["rock", "paper", "scissor"];
    setComputer(choices[Math.floor(Math.random() * 3)]);
  };
  useEffect(() => {
    newComputerChoice();
  }, []);
  return (
    <div className="play">
      <Link to="/play">
        <div data-cy="paper" onClick={() => playGame("Paper")}>
          Paper
        </div>
      </Link>
      <Link to="/play">
        <div data-cy="scissor" onClick={() => playGame("Scissor")}>
          Scissor
        </div>
      </Link>
      <Link to="/play">
        <div data-cy="rock" onClick={() => playGame("Rock")}>
          Rock
        </div>
      </Link>
      <Segment>
        My choice :{myChoice} <br />
        computer choice {computer}
      </Segment>
    </div>
  );
};

export default Play;

