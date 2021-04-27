import React from "react";
import { useEffect, useState } from "react";

 const Game = ({myChoice}) => {
   
  const [computer, setComputer] = useState("");
  const [playerWin, setPlayerwin] = useState("");

  const newComputerChoice = () => {
    const choices = ["rock", "paper", "scissor"];
    setComputer(choices[Math.floor(Math.random() * 3)]);
  };
  useEffect(() => {
    newComputerChoice();
  }, []);
debugger
  return(
  <div className="game">
    Computer Choice:{computer}<br/> my choice :{myChoice}

  </div>
  )}
export default Game;
