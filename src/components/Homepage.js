import React, { Component } from "react";
import { connect } from "react-redux";
import superagent from "superagent";
import { Link } from "react-router-dom";

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
      if (this.state.text === "") {
        alert("Room must have a name!");
        console.warn("Please write something");
        return false;
      }
      const response = await superagent
        .post(`${this.url}/gameroom`)
        .send({ name: this.state.text });
      console.log("response test", response);
      this.setState({ text: "" });
    } catch (error) {
      console.warn("error test", error);
    }
  };

  onChange = event => {
    const { value } = event.target;
    this.setState({ text: value });
  };

  joinRoom = async roomId => {
    console.log("jwt test:", this.props.auth.jwt);
    try {
      const response = await superagent
        .put(`${this.url}/join`)
        .set("Authorization", `Bearer ${this.props.auth.jwt}`)
        .send({
          roomId
        });

      console.log("NEW TEST :", response);
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    console.log("this.props.-test:", this.props);
    const { rooms } = this.props;
    const list = rooms.map(room => (
      <p key={room.id}>
        {room.name}{" "}
        <Link key={room.id} to={`/game/${room.id}`}>
          <button onClick={() => this.joinRoom(room.id)}>Join Game</button>
        </Link>
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
        <h3>New Room:</h3>
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
    rooms: state.rooms,
    auth: state.auth
  };
}

export default connect(mapStateToProps)(Homepage);
