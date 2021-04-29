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
      computer: choices[Math.floor(Math.random() * 2)],
      winner: ""
    });
    this.setState({
      winner: this.selectWinner(),
    });
  };

 
  selectWinner = () => {
    const { myChoice, computer} = this.state;
    if (myChoice === computer) {
      return "It is a draw";
    } else if (
      (myChoice === "rock" && computer === "scissor") ||
      (myChoice === "paper" && computer === "rock") ||
      (myChoice === "scissor" && computer === "paper")
    ) {
      return "Congratulation You Won!";
    } else {
      return "Computer Won";
    }
  };
  selectChoice = (choice) => {
    this.setState({
      myChoice: choice,
      winner: "",
    });
  };
  // debugger 
  render() {
    const { myChoice, computer, winner} = this.state
    return (
      <>
        <h1> Rock Paper Scissor</h1>
        <div>
          <Button to="/">
            <div data-cy="rock" onClick={() => this.selectChoice('rock')}>Rock</div>
          </Button>
          <Button>
            <div data-cy="paper" onClick={() => this.selectChoice("paper")}>Paper</div>
          </Button>
          <Button>
            <div data-cy="scissor" onClick={() => this.selectChoice("scissor")}>Scissor</div>
          </Button>
           <Game datacy="my-choice" choice={myChoice}/>
           <Game  datacy="computer" choice={computer}/>
           <h1 data-cy="result"> { winner ? this.selectWinner() : null}</h1>
          <Button  data-cy="play-game" onClick={this.playGame}>Start</Button>
        </div>
      </>
    );
  }
}

export default Play;
