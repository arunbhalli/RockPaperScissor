import React from "react";
import Rules from "./components/Rules"
import Play from "./components/Play.jsx";
import { Redirect, Route, Switch } from "react-router-dom";
// import {Container} from "semantic-ui-react"

const App = () => {
  return (
    <>
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
        <Route
        exact
        path="/rules"
        component={Rules}
      ></Route>
      </Switch>
    </>
  );
};
export default App;
