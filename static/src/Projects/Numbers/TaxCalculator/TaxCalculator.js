import React, { Component } from 'react';
import '../FindPI/FindPI.css';

/*
Asks the user to enter a cost and either a country or state tax.
It then returns the tax plus the total cost with tax.
*/
class TaxCalculator extends Component {

  constructor(props) {
    super(props);
    this.state = {
        amount: '',
        rate: '',
        totalAmount: 0,
        taxAmount: 0,
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
    const tempTaxAmount = parseInt(this.state.amount) * (this.state.rate/100);
    const tempTotalAmount = parseInt(this.state.amount) + tempTaxAmount;
    console.log(tempTaxAmount + ' ' + tempTotalAmount);
    this.setState({
      taxAmount: tempTaxAmount,
      totalAmount: tempTotalAmount
    });
  }

  handleSubmit(event) {
    if (this.state.amount === '' || this.state.rate === '') {
      this.setState({error: 'Must enter a value'});
    } else {
      if (!isNaN(this.state.amount) || !isNaN(this.state.rate)) {
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
      <div className="title">Tax Calculator</div>
      <div className="body">
        <div className="input-wrapper">
          <div className="input-title">Amount</div>
          <input className="input" type="text" name="amount" value={this.state.amount} onChange={this.handleChange}/>
          <div className="input-title">Rate</div>
          <input className="input" type="text" name="rate" value={this.state.rate} onChange={this.handleChange}/>
        </div>
        <div className="error">{this.state.error}</div>
        <button className="button" type="submit" onClick={this.handleSubmit}>
          <div className="text">Calculate</div>
        </button>
      </div>
      <div className="answer">Total Amount: {this.state.totalAmount}</div>
      <div className="answer">Tax Amount: {this.state.taxAmount}</div>
    </div>
    );
  }
}

export default TaxCalculator;