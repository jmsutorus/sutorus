import React, { Component } from 'react';
import '../FindPI/FindPI.css';
import { NavLink } from 'react-router-dom';

class MortgageCalc extends Component {

  constructor(props) {
    super(props);
    this.state = {
        terms: '',
        amount: '',
        interval: 'Month',
        rate: '',
        paymentRate: 0,
        error: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const value = event.target.value;
    this.setState({[event.target.name]: value});
  }

  calculate(value) {
    const p = this.state.amount;
    const r = (this.state.rate/12)/100;
    const n = 30*12;
    const payment = ((r*p)*Math.pow((1+r), n))/
    (Math.pow((1+r), n) - 1);
    this.setState({paymentRate: Math.ceil(payment)});
  }

  handleSubmit(event) {
    if (this.state.amount === '' || this.state.terms === '' || this.state.interval === '' || this.state.rate === '') {
      this.setState({error: 'Must enter a value'});
    } else {
      if (!isNaN(this.state.amount) || !isNaN(this.state.terms) || !isNaN(this.state.rate)) {
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
      <div className="title">Calculate Mortgage</div>
      <div className="body">
        <div className="input-wrapper">
        <div className="input-title">Amount</div>
          <input className="input" name="amount" type="text" value={this.state.amount} onChange={this.handleChange}/>
          <div className="input-title">Number of Terms</div>
          <input className="input" name="terms" type="text" value={this.state.terms} onChange={this.handleChange}/>
          <div className="input-title">Intervals</div>
          <input className="input" name="interval" type="text" value={this.state.interval} onChange={this.handleChange}/>
          <div className="input-title">Interest Rate %</div>
          <input className="input" name="rate" type="text" value={this.state.rate} onChange={this.handleChange}/>
        </div>
        <div className="error">{this.state.error}</div>
        <button className="button" type="submit" onClick={this.handleSubmit}>
          <div className="text">Calculate</div>
        </button>
      </div>
      <div className="answer">{this.state.paymentRate} Per {this.state.interval}</div>
    </div>
    );
  }
}

export default MortgageCalc;