import React from "react";
import Play from "./components/Play.jsx";
import Header from "./components/Header.jsx";
import { Redirect, Route, Switch } from "react-router-dom";
// import {Container} from "semantic-ui-react"

const App = () => {
  return (
    <>
      <Header  />
      <Switch>
        <Route
          exact
          path="/"
          render={() => {
            return <Redirect to="/play" />;
          }}
        />
        <Route
          exact
          path="/play"
          component={Play}
        ></Route>

      </Switch>
    </>
  );
};
export default App;
