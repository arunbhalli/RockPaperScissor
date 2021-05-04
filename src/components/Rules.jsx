import React from "react";
import { Link } from "react-router-dom";
class Rules extends React.Component {
  render() {
    return (
      <div className="popup">
        <h1> Rules are very simple for this game </h1>
        <h2> 1 - Rock vs Paper = Paper wins</h2>
        <h2> 2 - Rock vs Scissor = Rock wins</h2>
        <h2> 3 - Paper vs Scissor = Scissor wins</h2>
        <Link to="/play" className="link">
          Click here to play
        </Link>
      </div>
    );
  }
}
export default Rules;
