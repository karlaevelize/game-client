import React, { Component } from "react";
import { connect } from "react-redux";

class Homepage extends Component {
  render() {
    return (
      <div>
        <h2>Rock, Paper, Scissors</h2>
        <p>Building...</p>
        <img
          alt="gif"
          src="https://cdn.dribbble.com/users/14356/screenshots/2406950/hands.gif"
        ></img>
      </div>
    );
  }
}

export default connect()(Homepage);
