import React,{useState} from "react";
import Play from "./components/Play.jsx";
import Header from "./components/Header.jsx";
import Game from "./components/Game.jsx";
import { Redirect, Route, Switch } from "react-router-dom";
// import {Container} from "semantic-ui-react"

const App = () => {

  const [myChoice, setMychoice] = useState("");
  const [score, setScore] = useState(0);
  return (
    <>
    <Header score={score}/>
    <Switch>
    <Route
    exact
    path="/"
    render={() => {
      return <Redirect to="/play" />;
    }}
  />
   <Route exact path="/play" component={Play} setMychoice={setMychoice}></Route>
   <Route exact path="/game" component={Game} score={score}></Route>
    </Switch>
    </>
  );
};
export default App;
