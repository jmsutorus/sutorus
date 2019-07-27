import React, { Component } from 'react';
import '../FindPI/FindPI.css';

class PrimeFact extends Component {

  constructor(props) {
    super(props);
    this.state = {
        digit: '',
        pi: [],
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

  getPrimeFact(integer) {
    //integer is the value for which we are finding prime factors
    let primeArray = [];
    let isPrime = false;

    //find divisors starting with 2

    for(let i = 2; i <= integer; i++){
        if (integer % i === 0) {

            //check if divisor is prime
            for(var j = 2; j <= i/2; j++) {
                if(i % j === 0) {
                    isPrime = false;
                } else {
                    isPrime = true;
                }
            }

            //if the divisor is prime

            if (isPrime === true) {
                //divide integer by prime factor & factor store in array primeArray
                integer /= i
                primeArray.push(i);
            }
        }
    }

    return primeArray;
  }

  handleSubmit(event) {
    if (event.length === 0) {
      this.setState({error: 'Must enter a value'});
    } else {
      if (!isNaN(event)) {
        this.setState({error: ''});
        this.setState({pi: this.getPrimeFact(Number(event))});
    } else {
      this.setState({error: 'Must be a number'});
    }
    }
  }

  createList() {
    let items = [];
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
      <div className="title">Prime Factorization</div>
      <div className="body">
        <div className="input-wrapper">
          <div className="input-title">Prime Number</div>
          <input className="input" type="text" value={this.state.digit} onChange={this.handleChange}/>
        </div>
        <div className="error">{this.state.error}</div>
        {/* <button className="button" type="submit" onClick={this.handleSubmit}>
          <div className="text">Find PI</div>
        </button> */}
      </div>
      <div className="answer-wrapper">{this.createList()}</div>
    </div>
    );
  }
}

export default PrimeFact;