import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../components/Home";
import Squads from "../components/Squads";
import Squad from "../components/Squad";
import NewSquad from "../components/NewSquad";

export default (
  <Router>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/squads" exact component={Squads} />
      <Route path="/squad/:id" exact component={Squad} />
      <Route path="/squad" exact component={NewSquad} />
    </Switch>
  </Router>
);
