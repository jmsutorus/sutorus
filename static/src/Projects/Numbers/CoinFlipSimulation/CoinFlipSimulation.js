import React, { Component } from 'react';
import '../FindPI/FindPI.css';

/*
Write some code that simulates flipping a single coin however many times the user decides.
The code should record the outcomes and count the number of tails and heads.
*/
class CoinFlip extends Component {

  constructor(props) {
    super(props);
    this.state = {
        numberOfFlips: '',
        heads: 0,
        tails: 0,
        error: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const value = event.target.value;
    this.setState({[event.target.name]: value});
  }

  calculate() {
    this.setState({
      heads: 0,
      tails: 0,
    });
    let tempheads = 0;
    let temptails = 0;
    for (let i = 0; i < this.state.numberOfFlips; i++) {
      if (Math.floor(Math.random()*2) === 0) {
        tempheads++;
      } else {
        temptails++;
      }
    }
    this.setState({
      heads: tempheads,
      tails: temptails,
    });
  }

  handleSubmit(event) {
    if (this.state.numberOfFlips === '') {
      this.setState({error: 'Must enter a value'});
    } else {
      if (!isNaN(this.state.numberOfFlips)) {
        this.setState({error: ''});
        this.calculate();
      } else {
        this.setState({error: 'Must be a number'});
      }
    }
  }

  render() {
    return (
    <div className="module">
      <div className="title">Coin Flip</div>
      <div className="body">
        <div className="input-wrapper">
          <div className="input-title">Number of Flips</div>
          <input className="input" type="text" name="numberOfFlips" value={this.state.numberOfFlips} onChange={this.handleChange}/>
        </div>
        <div className="error">{this.state.error}</div>
        <button className="button" type="submit" onClick={this.handleSubmit}>
          <div className="text">Calculate</div>
        </button>
      </div>
      <div className="answer">Heads: {this.state.heads}</div>
      <div className="answer">Tails: {this.state.tails}</div>
    </div>
    );
  }
}

export default CoinFlip;