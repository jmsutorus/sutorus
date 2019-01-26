import React, { Component } from 'react';
import '../FindPI/FindPI.css';
import { NavLink } from 'react-router-dom';

class NextPrime extends Component {

  constructor(props) {
    super(props);
    this.state = {
        digit: '',
        pi: 0,
        error: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const value = event.target.value;
    this.setState({digit: value});
    this.handleSubmit(value);
  }

  isPrime(number) {
    let start = 2;
    const limit = Math.sqrt(number);
    while (start <= limit) {
        if (number % start++ < 1) return false;
    }
    return number > 1;
  }

  nextPrime(value) {
    const start = value + 1;
    for (var i = start; i < (value + 10000); i++) {
        if (this.isPrime(i)) {
            return i;
        }
    }
    return value;
  }

  handleSubmit(event) {
    if (event.length === 0) {
      this.setState({error: 'Must enter a value'});
    } else {
      if (!isNaN(event)) {
        this.setState({error: ''});
        this.setState({pi: this.nextPrime(Number(event))});
      } else {
        this.setState({error: 'Must be a number'});
      }
    }
  }

  render() {
    return (
    <div className="module">
      <div className="title">Next Prime</div>
      <div className="body">
        <div className="input-wrapper">
          <div className="input-title">Number</div>
          <input className="input" type="text" value={this.state.digit} onChange={this.handleChange}/>
        </div>
        <div className="error">{this.state.error}</div>
        {/* <button className="button" type="submit" onClick={this.handleSubmit}>
          <div className="text">Find PI</div>
        </button> */}
      </div>
      <div className="answer">{this.state.pi}</div>
    </div>
    );
  }
}

export default NextPrime;