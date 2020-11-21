import React, { Component } from "react";
import NavBar from "./components/navbar";
import About from "./components/about";
import Shop from "./components/shop";
import Home from "./components/home";
import ShopDetails from "./components/shopDetails";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <NavBar />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" component={About} />
            <Route path="/shop" exact component={Shop} />
            <Route path="/shop/:id" component={ShopDetails} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
