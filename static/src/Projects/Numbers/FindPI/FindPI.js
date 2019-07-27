import React, { Component } from 'react';
import './FindPI.css';

class FindPI extends Component {

  constructor(props) {
    super(props);
    this.state = {
        digit: '',
        pi: 0,
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

  getPi(length) {
    return Math.PI.toFixed(length);
  }

  handleSubmit(event) {
    if (event.length === 0) {
      this.setState({error: 'Must enter a value'});
    } else {
      if (!isNaN(event)) {
      if (event < 100) {
        this.setState({error: ''});
        this.setState({pi: this.getPi(Number(event))});
      } else {
        this.setState({error: 'Must be less than 100'});
      }
    } else {
      this.setState({error: 'Must be a number'});
    }
    }
  }

  render() {
    return (
    <div className="module">
      <div className="title">Find PI to the Nth Digit</div>
      <div className="body">
        <div className="input-wrapper">
          <div className="input-title">Nth Digit:</div>
          <input className="input" type="text" value={this.state.digit} onChange={this.handleChange}/>
        </div>
        <div className="error">{this.state.error}</div>
        {/* <button className="button" type="submit" onClick={this.handleSubmit}>
          <div className="text">Find PI</div>
        </button> */}
      </div>
      <div className="answer">{this.state.pi}</div>
    </div>
    );
  }
}

export default FindPI;
