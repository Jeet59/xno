import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import "./TicTacToe.css";
import Game from "./Game.js";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img
            src="https://cdn-icons-png.flaticon.com/512/2911/2911080.png"
            className="App-logo"
            alt="logo"
          />
          <h2>Tic-Tac-Toe</h2>
        </div>
        <p className="App-intro">
          <Game></Game>
        </p>
      </div>
    );
  }
}

export default App;
