import React, { Component } from "react";
import scissors from "../../src/scissors.png";
import paper from "../../src/paper.png";
import rock from "../../src/rocky.png";

const weapons = ["rock", "paper", "scissors"];
const weapons2 = ["rock", "paper", "scissors"];

const Player1 = ({ weapon }) => (
  <>
    <div className="player">
      <img
        className="player-image"
        src={
          weapon === "rock" ? rock : weapon === "scissors" ? scissors : paper
        }
        alt="Rock Paper Scissors"
      />
    </div>
  </>
);

const Player2 = ({ weapon2 }) => (
  <>
    <div className="player">
      <img
        className="player-image"
        src={
          weapon2 === "rock" ? rock : weapon2 === "scissors" ? scissors : paper
        }
        alt="Rock Paper Scissors"
      />
    </div>
  </>
);

class Game extends Component {
  state = {
    playerOne: weapons[0],
    playerTwo: weapons2[0],
    winner: ""
  };

  startGame = () => {
    this.setState({
      winner: this.selectWinner()
    });
  };

  selectWinner = () => {
    const { playerOne, playerTwo } = this.state;

    if (playerOne === playerTwo) {
      return <h2>"Oops, it's a Tie!"</h2>;
    } else if (
      (playerOne === "rock" && playerTwo === "scissors") ||
      (playerOne === "scissors" && playerTwo === "paper") ||
      (playerOne === "paper" && playerTwo === "rock")
    ) {
      return <h2>"Player One Wins!"</h2>;
    } else {
      return <h2>"Player Two Wins!"</h2>;
    }
  };

  selectWeapon = weapon => {
    this.setState({
      playerOne: weapon,
      winner: ""
    });
  };

  selectWeapon2 = weapon2 => {
    this.setState({
      playerTwo: weapon2,
      winner: ""
    });
  };

  render() {
    const { playerOne, playerTwo, winner } = this.state;
    return (
      <>
        <h1 style={{ textAlign: "center" }}>Rock Paper Scissors</h1>

        <div>
          <Player1 weapon={playerOne} />
          <Player2 weapon2={playerTwo} />
        </div>
        <div>
          <h3>Player 1</h3>
          <button
            className="weaponBtn"
            onClick={() => {
              this.selectWeapon("rock");
            }}
          >
            rock
          </button>
          <button
            className="weaponBtn"
            onClick={() => {
              this.selectWeapon("paper");
            }}
          >
            paper
          </button>
          <button
            className="weaponBtn"
            onClick={() => {
              this.selectWeapon("scissors");
            }}
          >
            scissor
          </button>
        </div>
        <div>
          <h3>Player 2</h3>
          <button
            className="weaponBtn"
            onClick={() => {
              this.selectWeapon2("rock");
            }}
          >
            rock
          </button>
          <button
            className="weaponBtn"
            onClick={() => {
              this.selectWeapon2("paper");
            }}
          >
            paper
          </button>
          <button
            className="weaponBtn"
            onClick={() => {
              this.selectWeapon2("scissors");
            }}
          >
            scissor
          </button>
        </div>
        <br />
        <div className="winner">{winner ? this.selectWinner() : null}</div>
        <br />
        <button type="button" onClick={this.startGame}>
          Start!
        </button>
      </>
    );
  }
}

export default Game;
