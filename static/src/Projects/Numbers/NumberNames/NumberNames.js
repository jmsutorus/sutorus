import React, { Component } from 'react';
import '../FindPI/FindPI.css';
import { NavLink } from 'react-router-dom';

/*
Show how to spell out a number in English.
You can use a preexisting implementation or roll your own,
but you should support inputs up to at least one million (or the maximum value of your language's default bounded integer type, if that's less).
Optional: Support for inputs other than positive integers (like zero, negative integers, and floating-point numbers).
*/
class NumberNames extends Component {

  constructor(props) {
    super(props);
    this.state = {
        cost: '',
        given: '',
        error: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const value = event.target.value;
    this.setState({[event.target.name]: value});
  }

  calculate() {
  }

  handleSubmit(event) {
    if (this.state.cost === '' || this.state.given === '') {
      this.setState({error: 'Must enter a value'});
    } else {
      if (!isNaN(this.state.cost) || !isNaN(this.state.given)) {
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
      <div className="title">NumberNames</div>
      <div className="body">
        <div className="input-wrapper">
          <div className="input-title">Cost</div>
          <input className="input" type="text" name="cost" value={this.state.cost} onChange={this.handleChange}/>
        </div>
        <div className="error">{this.state.error}</div>
        <button className="button" type="submit" onClick={this.handleSubmit}>
          <div className="text">Calculate</div>
        </button>
      </div>
      <div className="answer">{this.state.given}</div>
    </div>
    );
  }
}

export default NumberNames;