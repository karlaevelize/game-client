import React, { Component } from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Homepage from "./components/Homepage";
import Toolbar from "./components/Toolbar";
import SignUpPage from "./components/SignUpPage";
import LoginPage from "./components/LoginPage";

class App extends Component {
  url = "http://localhost:4000";
  stream = new EventSource(`${this.url}/stream`);

  componentDidMount() {
    this.stream.onmessage = event => {
      const { data } = event;
      const action = JSON.parse(data);
      console.log("test", action);
    };
  }

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

// function App() {
//   return (
//     <div className="App">
//       <Toolbar />
//       <Switch>
//         <Route path="/login" component={LoginPage} />
//         <Route path="/signup" component={SignUpPage} />
//         <Route exact path="/" component={Homepage} />
//       </Switch>
//     </div>
//   );
// }

export default App;
