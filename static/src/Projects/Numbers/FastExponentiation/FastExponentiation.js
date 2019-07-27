import React, { Component } from 'react';
import '../FindPI/FindPI.css';

/*
Ask the user to enter 2 integers a and b and output a^b (i.e. pow(a,b))
in O(lg n) time complexity.
*/
class FastExponentiation extends Component {

  constructor(props) {
    super(props);
    this.state = {
        a: '',
        b: '',
        answer: '',
        error: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const value = event.target.value;
    this.setState({[event.target.name]: value});
  }

  calculate(a, b) {
    let tempValue = 1;
    while (b > 0) {
      if ((b&1) === 1) {
        tempValue = tempValue*a
      }
      b = b >>> 1;
      a = a*a;
    }
    return tempValue;
  }

  handleSubmit(event) {
    if (this.state.a === '' || this.state.b === '') {
      this.setState({error: 'Must enter a value'});
    } else {
      if (!isNaN(this.state.a) || !isNaN(this.state.b)) {
        this.setState({
          error: '',
          answer: this.calculate(parseInt(this.state.a), parseInt(this.state.b))
      });
      } else {
        this.setState({error: 'Must be a number'});
      }
    }
  }

  render() {
    return (
    <div className="module">
      <div className="title">Fast Exponentiation</div>
      <div className="body">
        <div className="input-wrapper">
          <div className="input-title">a</div>
          <input className="input" type="text" name="a" value={this.state.a} onChange={this.handleChange}/>
          <div className="input-title">b</div>
          <input className="input" type="text" name="b" value={this.state.b} onChange={this.handleChange}/>
        </div>
        <div className="error">{this.state.error}</div>
        <button className="button" type="submit" onClick={this.handleSubmit}>
          <div className="text">Calculate</div>
        </button>
      </div>
      <div className="answer">a^b: {this.state.answer}</div>
    </div>
    );
  }
}

export default FastExponentiation;