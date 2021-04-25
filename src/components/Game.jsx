import React from "react";
import {useEffect, useState} from "react";

export const Game = (score, myChoice, setScore) => {
  const [computer, setComputer] = useState("");
  const [playerWin, setPlayerwin] = useState("");

  const newComputerChoice = () => {
    const choice = ["rock", "paper", "scissor"];
    setComputer(choice[Math.floor(Math.random() * 3)]);
  };
  useEffect(() => {
    newComputerChoice();
  }, []);

  return
  <div className="game">
 my choice:{myChoice} <br/>
 Computer Choice:{computer}
  </div>;
};
export default Game;
