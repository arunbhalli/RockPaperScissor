import React from "react";
import { Button, Container } from "semantic-ui-react";
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
          // computer: choices[Math.floor(Math.random() * (choices.length))],
      // computer: choices[Math.round(Math.random() * 3)], //we can also use (choice.length)
      // computer: choices[Math.ceil((Math.random() * (3)-0.3))], // somehow if we manage to get no in minus by using random methode 
                                                              // it is possible to use Math.ceil methode 
      computer: choices[Math.trunc(Math.random() * (3))],//we can also use (choice.length),
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
        <h1>Welcome To The Rock, Paper & Scissor Game</h1>
        <div> <h2> Select your  choice</h2>
          <Button className="button">
            <div data-cy="rock" onClick={() => this.selectChoice('rock')}>Rock</div>
          </Button>
          <Button >
            <div data-cy="paper"  onClick={() => this.selectChoice("paper")}>Paper</div>
          </Button>
          <Button>
            <div data-cy="scissor" onClick={() => this.selectChoice("scissor")}>Scissor</div>
          </Button>
           <Game datacy="my-choice" choice={myChoice}/>
           <Game  datacy="computer" choice={computer}/>
           <h1 data-cy="result"> { winner ? this.selectWinner() : null}</h1>
           <h1>Computer choice</h1>
          <Button size='massive' data-cy="play-game" onClick={this.playGame}>Start</Button>
        </div>
      </>
    );
  }
}

export default Play;
