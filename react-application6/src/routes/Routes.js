import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  BrowserRouter,
} from "react-router-dom";
import Dashboard from "../components/Dashboard/Dashboard";
import Home from "../components/Home/Home";
import Login from "../components/Login/Login";

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route path="/" exact component={Login} />
            <Route component={Dashboard} path="/dashboard" />
            <Route component={Dashboard} path="/dashboard" />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default Routes;
