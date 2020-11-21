import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./routes/Routes";

class App extends React.Component {
  render() {
    return (
      <Router>
        <Routes></Routes>
      </Router>
    );
  }
}

export default App;
