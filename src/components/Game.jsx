import React from 'react'

export const Game = () => {
  const [computer, setComputer] = useState("");
  const [playerWin, setPlayerwin] = useState("");

  const newhouse = () => {
    const choice = ["rock","paper","scissor"];
    setComputer(choice[Math.floor(Math.random()*3)])
  }
  return (
    <div>
    </div>
  )
}
export default Game