import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";



class App extends Component {

  render() {
    return (
      <div className="App">
        <Router>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/home" component={Home}></Route>
        </Router>
      </div>
    );
  }
}

export default App;
