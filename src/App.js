import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import superagent from "superagent";
import "./App.css";
import Homepage from "./components/Homepage";
import Toolbar from "./components/Toolbar";
import SignUpPage from "./components/SignUpPage";
import LoginPage from "./components/LoginPage";

class App extends Component {
  url = "http://localhost:4000";
  stream = new EventSource(`${this.url}/stream`);

  state = {
    text: ""
  };

  componentDidMount() {
    this.stream.onmessage = event => {
      const { data } = event;
      const action = JSON.parse(data);
      console.log("test action", action);
    };
  }

  onSubmit = async event => {
    event.preventDefault();

    try {
      const response = await superagent
        .post(`${this.url}/gameroom`)
        .send({ name: this.state.text });
      console.log("response test", response);
    } catch (error) {
      console.warn("error test", error);
    }
  };

  onChange = event => {
    const { value } = event.target;
    this.setState({ text: value });
  };

  render() {
    return (
      <div className="App">
        <Toolbar />
        <br />
        <form onSubmit={this.onSubmit}>
          <input onChange={this.onChange} value={this.state.text} type="text" />
          <button>Submit</button>
        </form>
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
