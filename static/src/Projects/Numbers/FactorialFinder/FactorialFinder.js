import React, { Component } from 'react';
import '../FindPI/FindPI.css';

/*
The Factorial of a positive integer, n, is defined as the product of the
sequence n, n-1, n-2, ...1 and the factorial of zero, 0, is defined as being 1.
Solve this using both loops and recursion.
*/
class FactorialFinder extends Component {

  constructor(props) {
    super(props);
    this.state = {
      start: '',
      answer: '',
      error: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const value = event.target.value;
    this.setState({[event.target.name]: value});
    this.handleSubmit(value);
  }

  calculate(event) {
    if (event === 0) {
      this.setState({answer: 1});
    } else {
      let tempAnswer = 1;
      for (let i = event; i > 1; i--) {
        tempAnswer *= i;
      }
      this.setState({answer: tempAnswer});
    }
  }

  handleSubmit(event) {
    if (event === '') {
      this.setState({error: 'Must enter a value'});
    } else {
      if (!isNaN(event) && parseInt(event) < 100) {
        this.setState({error: ''});
        this.calculate(parseInt(event));
      } else {
        this.setState({error: 'Must be a number smaller than 100'});
      }
    }
  }

  render() {
    return (
    <div className="module">
      <div className="title">Factorial Finder</div>
      <div className="body">
        <div className="input-wrapper">
          <div className="input-title">N</div>
          <input className="input" type="text" name="start" value={this.state.start} onChange={this.handleChange}/>        </div>
        <div className="error">{this.state.error}</div>
      </div>
      <div className="answer">{this.state.answer}</div>
    </div>
    );
  }
}

export default FactorialFinder;