import React, { Component } from 'react';
import '../FindPI/FindPI.css';
import { NavLink } from 'react-router-dom';

/*
Takes in a credit card number from a common credit card vendor
(Visa, MasterCard, American Express, Discoverer) and
validates it to make sure that it is a valid number 
(look into how credit cards use a checksum).
*/
class CreditCardValidator extends Component {

  constructor(props) {
    super(props);
    this.state = {
        cardNumber: '',
        type: '',
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
    // American Express
    const aeCardNo = /^(?:3[47][0-9]{13})$/;
    // Visa
    const visaCardNo = /^(?:4[0-9]{12}(?:[0-9]{3})?)$/;
    // Mastercard
    const masterCardNo = /^(?:5[1-5][0-9]{14})$/;
    // Discover
    const discoverCardNo = /^(?:6(?:011|5[0-9][0-9])[0-9]{12})$/;
    if (event.match(aeCardNo)) {
      this.setState({type: 'American Express Card'});
    } else if (event.match(visaCardNo)) {
      this.setState({type: 'Visa Card'});
    } else if (event.match(masterCardNo)) {
      this.setState({type: 'Master Card'});
    } else if (event.match(discoverCardNo)) {
      this.setState({type: 'Discover Card'});
    } else {
      this.setState({
        type: '',
        error: 'Not a valid card number'
      });
    }
  }

  handleSubmit(event) {
    const input = event.replace(/\s/g, '');
    if (input === '') {
      this.setState({error: 'Must enter a value'});
    } else {
      if (!isNaN(input)) {
        this.setState({error: ''});
        this.calculate(input);
      } else {
        this.setState({error: 'Must be a number'});
      }
    }
  }

  render() {
    return (
    <div className="module">
      <div className="title">Credit Card Validator</div>
      <div className="body">
        <div className="input-wrapper">
          <div className="input-title">Card Number</div>
          <input className="input" type="text" name="cardNumber" value={this.state.cardNumber} onChange={this.handleChange}/>
        </div>
        <div className="error">{this.state.error}</div>
      </div>
      <div className="answer">{this.state.type}</div>
    </div>
    );
  }
}

export default CreditCardValidator;