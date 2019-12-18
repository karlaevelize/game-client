import React, { Component } from "react";
import { connect } from "react-redux";
import superagent from "superagent";

class Homepage extends Component {
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
      this.props.dispatch(action);
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
    console.log("this.props.-test:", this.props);
    const { rooms } = this.props;
    const list = rooms.map(room => (
      <p key={room.id}>
        {room.name} <button>Join Game</button>
      </p>
    ));
    console.log({ rooms, list });
    return (
      <div>
        <br />
        <h2>Rock, Paper, Scissors</h2>
        <p>Building...</p>
        <img
          alt="gif"
          src="https://cdn.dribbble.com/users/14356/screenshots/2406950/hands.gif"
        ></img>
        <form onSubmit={this.onSubmit}>
          <input onChange={this.onChange} value={this.state.text} type="text" />
          <button>Submit</button>
        </form>
        {list}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    rooms: state.rooms
  };
}

export default connect(mapStateToProps)(Homepage);
