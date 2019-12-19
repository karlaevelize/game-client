import React, { Component } from "react";

const PlayerCard = ({ color, symbol }) => {
  const style = {
    backgroundColor: color,
    backgroundImage: "url(./img/ + symbol + .png)"
  };
  return (
    <div style={style} className="player-card">
      {symbol}
    </div>
  );
};

class Game extends Component {
  constructor(props) {
    super(props);
    this.symbol = ["rock", "paper", "scissors"];
    this.state = {};
  }

  decideWinner = () => {
    const { playerBlue, playerRed } = this.state;
    if (playerRed === playerBlue) {
      return "It's a draw!";
    }
    if (
      (playerRed === "rock" && playerBlue === "scissors") ||
      (playerRed === "paper" && playerBlue === "rock") ||
      (playerRed === "scissors" && playerBlue === "paper")
    ) {
      return "Red player wins!";
    } else {
      return "Blue player wins!";
    }
  };

  runGame = () => {
    let counter = 0;
    let myInterval = setInterval(() => {
      counter++;
      this.setState({
        playerRed: this.symbol[Math.floor(Math.random() * 3)],
        playerBlue: this.symbol[Math.floor(Math.random() * 3)],
        winner: ""
      });
      if (counter > 40) {
        clearInterval(myInterval);
        this.setState({ winner: this.decideWinner() });
      }
    }, 100);
  };

  render() {
    return (
      <header>
        <div className="App">
          <br />
          <PlayerCard
            color="red"
            symbol={this.state.playerRed}
            className="redPlayer"
          />
          <PlayerCard
            color="blue"
            symbol={this.state.playerBlue}
            className="bluePlayer"
          />
          <p>{this.state.winner}</p>
          <button onClick={this.runGame}>Run Game</button>
        </div>
      </header>
    );
  }
}

export default Game;
