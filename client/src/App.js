import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";
import draft from "./pages/draft"
import MyTeams from "./pages/MyTeams";
import Login from "./pages/Login";
import tommy from "./pages/teamPages/tommy";
import patrick from "./pages/teamPages/patrick";
import james from "./pages/teamPages/james";
import neptune from "./pages/teamPages/neptune";
import dj from "./pages/teamPages/dj";
import goose from "./pages/teamPages/goose";
import al from "./pages/teamPages/al";
import joe from "./pages/teamPages/joe";
import steids from "./pages/teamPages/steids";
import ben from "./pages/teamPages/ben";
// This currently isn't working
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Router>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/home" component={Home}></Route>
          <Route exact path="/MyTeams" component={MyTeams}></Route>
          {/* ADD THE LOGIN PAGE BELOW */}
          {/* <Route exact path="/login" component={Login}></Route> */}
          <Route exact path="/draft" component={draft}></Route>
          <Route exact path="/tommy" component={tommy}></Route>
          <Route exact path="/patrick" component={patrick}></Route>
          <Route exact path="/james" component={james}></Route>
          <Route exact path="/neptune" component={neptune}></Route>
          <Route exact path="/dj" component={dj}></Route>
          <Route exact path="/goose" component={goose}></Route>
          <Route exact path="/al" component={al}></Route>
          <Route exact path="/joe" component={joe}></Route>
          <Route exact path="/steids" component={steids}></Route>
          <Route exact path="/ben" component={ben}></Route>
        </Router>
      </div>
    );
  }
}

export default App;
