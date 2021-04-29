import React, { useState } from "react";
import { Segment, Grid, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import Game from "./Game"

const choices = ["rock", "paper", "scissor"];
class Play extends React.Component {
  state = {
    myChoice: choices[0],
    computer: choices[0],
    winner: "",
  };

  playGame = () => {
    this.setState({
      computer: choices[Math.floor(Math.random() * 3)],
      winner: ""
    });
    this.setState({
      winner: this.selectWinner(),
    });
  };
  selectWinner = () => {
    const { myChoice, computer, winner } = this.state;
    if (myChoice === computer) {
      return "It is a draw!";
    } else if (
      (myChoice === "rock" && computer === "scissor") ||
      (myChoice === "paper" && computer === "rock") ||
      (myChoice === "scissor" && computer === "paper")
    ) {
      return "You Won!";
    } else {
      return "IComputer Won";
    }
  };
  selectChoice = (choice) => {
    this.setState({
      myChoice: choice,
      winner: "",
    });
  };

  render() {
    const { myChoice, computer, winner} = this.state
    return (
      <>
        <h1> Rock Paper Scissor</h1>
        <div>
          <Button>
            <div data-cy="rock" onClick={() => this.selectChoice('rock')}>Rock</div>
          </Button>
          <Button>
            <div data-cy="paper" onClick={() => this.selectChoice('paper')}>Paper</div>
          </Button>
          <Button>
            <div data-cy="scissor" onClick={() => this.selectChoice('scissor')}>Scissor</div>
          </Button>
           <Game  choice={myChoice}/>
           <Game  choice={computer}/>
           <h1> { winner ? this.selectWinner() : null}</h1>
          <Button onClick={this.playGame}>Start</Button>
        </div>
      </>
    );
  }
}

export default Play;
