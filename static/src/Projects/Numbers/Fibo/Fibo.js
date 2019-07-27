import React, { Component } from 'react';
import '../FindPI/FindPI.css';

export default class Fibo extends Component {

  constructor(props) {
    super(props);
    this.state = {
        digit: '',
        pi: [],
        error: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.createList = this.createList.bind(this);
  }

  handleChange(event) {
    const value = event.target.value;
    this.setState({digit: value});
    this.handleSubmit(value);
  }

  getFibo(length, memo) {
    memo = memo || [];

    if (memo[length]) return memo[length];
    if (length <= 1) return 1;

    console.log(memo);
    this.setState({pi: memo});

    return memo[length] = this.getFibo(length - 1, memo) + this.getFibo(length - 2, memo);
  }

  handleSubmit(event) {
    if (event.length === 0) {
      this.setState({error: 'Must enter a value'});
    } else {
      if (!isNaN(event)) {
        if (event < 25) {
          this.setState({error: ''});
          this.getFibo(event, []);
        } else {
          this.setState({error: 'Must be less than 25'});
        }
      } else {
        this.setState({error: 'Must be a number'});
      }
    }
  }

  createList() {
    let items = [<div key={-2} className="item">1,</div>, <div key={-1} className="item">1,</div>];
    for (let i = 0; i < this.state.pi.length; i++) {
        if (this.state.pi[i] !== '' && this.state.pi[i]) {
            if (i < this.state.pi.length) {
                items.push(
                    <div key={i} className="item">{this.state.pi[i]},</div>
                );
            } else {
                items.push(
                    <div key={i} className="item">{this.state.pi[i]}</div>
                );
            }
        }
    }
    return items;
  }

  render() {
    return (
    <div className="module">
      <div className="title">Find Nth Fibo number</div>
      <div className="body">
        <div className="input-wrapper">
          <div className="input-title">Fibo Number</div>
          <input className="input" type="text" value={this.state.digit} onChange={this.handleChange}/>
        </div>
        <div className="error">{this.state.error}</div>
      </div>
      <div className="answer-wrapper">{this.createList()}</div>
    </div>
    );
  }
}