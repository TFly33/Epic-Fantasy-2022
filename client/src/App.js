import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";
import MyTeams from "./pages/MyTeams";
import Login from "./pages/Login";
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
          <Route exact path="/login" component={Login}></Route>
        </Router>
      </div>
    );
  }
}

export default App;
