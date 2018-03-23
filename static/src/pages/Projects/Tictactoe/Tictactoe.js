import React from "react";
import Button from "./Button.js";
import "./Tictactoe.css";
var oneA = [1, 1, 1, 0, 0, 0, 0, 0, 0]
var twoA = [0, 0, 0, 1, 1, 1, 0, 0, 0]
var threeA = [0, 0, 0, 0, 0, 0, 1, 1, 1]
var fourA = [1, 0, 0, 1, 0, 0, 1, 0, 0]
var fiveA = [0, 1, 0, 0, 1, 0, 0, 1, 0]
var sixA = [0, 0, 1, 0, 0, 1, 0, 0, 1]
var sevenA = [1, 0, 0, 0, 1, 0, 0, 0, 1]
var eightA = [0, 0, 1, 0, 1, 0, 1, 0, 0]

export default class Tictactoe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      boardValues: [0, 0, 0, 0, 0, 0, 0, 0, 0],
      currentTurn: 1,
    };
  }
  compareArrays(arrayOne, arrayTwo) {
    if (!arrayTwo)
    return false;
    // compare lengths - can save a lot of time
    if (arrayOne.length != arrayTwo.length)
        return false;
    var one = 0;
    var two = 0;
    var three = 0;
    for(var i = 0; i < arrayOne.length; i++) {
      if(arrayOne[i] != 0) {
        if(one == 0) {
          one = arrayTwo[i];
        }
        else if(two == 0) {
          two = arrayTwo[i];
        }
        else {
          three = arrayTwo[i];
        }
      }
    }
    if(one == 0 || two == 0 || three == 0) {
      return false;
    }
    if(one == two && one == three && two == three){
      return true;
    }
    return false;
  }
  checkWinCondition() {
    var tempArray = this.state.boardValues;
    if(this.compareArrays(oneA, tempArray) == true) {
      return true;
    }
    if(this.compareArrays(twoA, tempArray) == true) {
      return true;
    }
    if(this.compareArrays(threeA, tempArray) == true) {
      return true;
    }
    if(this.compareArrays(fourA, tempArray) == true) {
      return true;
    }
    if(this.compareArrays(fiveA, tempArray) == true) {
      return true;
    }
    if(this.compareArrays(sixA, tempArray) == true) {
      return true;
    }
    if(this.compareArrays(sevenA, tempArray) == true) {
      return true;
    }
    if(this.compareArrays(eightA, tempArray) == true) {
      return true;
    }
    return false;
  }
  resetGame() {
    var tempArray = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    this.setState({ boardValues: tempArray, currentTurn: 1});
  }
  onButtonClick(e) {
    //get current state
    //if state already set to 1 or 2 dont change
    if(this.state.boardValues[e] == 1 || this.state.boardValues[e] == 2) {
      //do nothing
      console.log("Invalid  move");
    }
    //otherwise change to 1 or 2
    else {
      var tempArray = this.state.boardValues;
      tempArray[e] = this.state.currentTurn;
      this.setState({ boardValues: tempArray});
    }
    //check if someone won
    var win = this.checkWinCondition();
    if(win == true) {
      //someone won, reset the board
      alert(this.state.currentTurn + " Won the game!")
      this.resetGame();
    }
    else {
      var flag = true;
      for(var i = 0; i < this.state.boardValues.length; i++) {
        if(this.state.boardValues[i] == 0) {
          flag = false;
        }
      }
      if(flag == true) {
        alert("Tie game")
        this.resetGame();
      }
      else {
        //no one won, continue
        console.log("No winner, continue playing")
      }
    }
    //change turn
    //check if it is now player 1 turn
    if(this.state.currentTurn == 2) {
      this.setState({ currentTurn: 1});
    }
    else {
      this.setState({ currentTurn: 2});
    }
    //return
  }
  render() {
    return (
      <div class="ttt-container">
        <h1 class="ttt-header">
          Welcome to Tic Tac Toe
        </h1>
        <div class="ttt-player-turn">
          Player {this.state.currentTurn} turn
        </div>
        <div class="ttt-grid-container">
          <Button currentNumber={this.state.boardValues[0]} onClick={() => {this.onButtonClick(0)}} />
          <Button currentNumber={this.state.boardValues[1]} onClick={() => {this.onButtonClick(1)}} />
          <Button currentNumber={this.state.boardValues[2]} onClick={() => {this.onButtonClick(2)}} />
          <Button currentNumber={this.state.boardValues[3]} onClick={() => {this.onButtonClick(3)}} />
          <Button currentNumber={this.state.boardValues[4]} onClick={() => {this.onButtonClick(4)}} />
          <Button currentNumber={this.state.boardValues[5]} onClick={() => {this.onButtonClick(5)}} />
          <Button currentNumber={this.state.boardValues[6]} onClick={() => {this.onButtonClick(6)}} />
          <Button currentNumber={this.state.boardValues[7]} onClick={() => {this.onButtonClick(7)}} />
          <Button currentNumber={this.state.boardValues[8]} onClick={() => {this.onButtonClick(8)}} />
        </div>
      </div>
    );
  }
}
