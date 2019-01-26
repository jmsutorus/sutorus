import React, { Component } from 'react';
import '../FindPI/FindPI.css';
import { NavLink } from 'react-router-dom';

class ChangeReturn extends Component {

  constructor(props) {
    super(props);
    this.state = {
        cost: '',
        given: '',
        change: {penny: 0, nickel: 0, dime: 0, quarter: 0},
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
    this.setState({change: {penny: 0, nickel: 0, dime: 0, quarter: 0}});
      let difference = (parseFloat(this.state.given).toFixed(2) - parseFloat(this.state.cost).toFixed(2)).toFixed(2);
      while (difference > 0) {
        console.log(difference);
        if (difference >= .25) {
            difference = (difference - .25).toFixed(2);
            const increase = this.state.change.quarter++;
            this.setState({change: {...this.state.change, quarter: increase}});
        } else if (difference >= .10) {
            difference = (difference - .1).toFixed(2);
            console.log(difference);
            const increase = this.state.change.dime++;
            this.setState({change: {...this.state.change, dime: increase}});
        } else if (difference >= .05) {
            difference = (difference - .05).toFixed(2);
            const increase = this.state.change.nickel++;
            this.setState({change: {...this.state.change, nickel: increase}});
        } else if (difference >= .01) {
            difference = (difference - .01).toFixed(2);
            const increase = this.state.change.penny++;
            this.setState({change: {...this.state.change, penny: increase}});
        }
      }
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
      <div className="title">Change Return</div>
      <div className="body">
        <div className="input-wrapper">
          <div className="input-title">Cost</div>
          <input className="input" type="text" name="cost" value={this.state.cost} onChange={this.handleChange}/>
          <div className="input-title">Money Given</div>
          <input className="input" type="text" name="given" value={this.state.given} onChange={this.handleChange}/>
        </div>
        <div className="error">{this.state.error}</div>
        <button className="button" type="submit" onClick={this.handleSubmit}>
          <div className="text">Calculate</div>
        </button>
      </div>
      <div className="answer">{this.state.change.quarter}</div>
      <div className="answer">{this.state.change.dime}</div>
      <div className="answer">{this.state.change.nickel}</div>
      <div className="answer">{this.state.change.penny}</div>
    </div>
    );
  }
}

export default ChangeReturn;