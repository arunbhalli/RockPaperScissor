import React from "react";
import Play from "./components/Play.jsx";
import { Redirect, Route, Switch } from "react-router-dom";
import Header from "./components/Header.jsx";
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
        path="/header"
        component={Header}
      ></Route>

      </Switch>
    </>
  );
};
export default App;
