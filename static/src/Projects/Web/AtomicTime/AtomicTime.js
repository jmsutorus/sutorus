import React, { Component } from 'react';
import '../FindPI/FindPI.css';
import { NavLink } from 'react-router-dom';

/*
This program will get the true atomic time from an atomic time clock on the Internet.
Use any one of the atomic clocks returned by a simple Google search.
*/
class AtomicTime extends Component {

  constructor(props) {
    super(props);
    this.state = {
        cost: '',
        given: '',
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
      <div className="title">AtomicTime</div>
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

export default AtomicTime;