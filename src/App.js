import "./App.css";
import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import { connect } from "react-redux";
import Homepage from "./components/Homepage";
import Toolbar from "./components/Toolbar";
import SignUpPage from "./components/SignUpPage";
import LoginPage from "./components/LoginPage";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Toolbar />
        <Switch>
          <Route path="/login" component={LoginPage} />
          <Route path="/signup" component={SignUpPage} />
          <Route exact path="/" component={Homepage} />
        </Switch>
      </div>
    );
  }
}

export default connect()(App);
