import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Homepage from "./components/Homepage";
import Toolbar from "./components/Toolbar";
import SignUpPage from "./components/SignUpPage";
import LoginPage from "./components/LoginPage";

function App() {
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

export default App;
