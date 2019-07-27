import React, { Component } from 'react';
import '../FindPI/FindPI.css';

class BinaryToDecimal extends Component {

  constructor(props) {
    super(props);
    this.state = {
        input: '',
        output: '',
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
    this.setState({output: (+event).toString(2)});
  }

  handleSubmit(event) {
    if (event === '') {
      this.setState({error: 'Must enter a value'});
    } else {
      if (!isNaN(event)) {
        this.setState({error: ''});
        this.calculate(event);
      } else {
        this.setState({error: 'Must be a number'});
      }
    }
  }

  render() {
    return (
    <div className="module">
      <div className="title">Convert to binary</div>
      <div className="body">
        <div className="input-wrapper">
          <div className="input-title">Base 10 Number</div>
          <input className="input" type="text" name="input" value={this.state.input} onChange={this.handleChange}/>
        </div>
        <div className="error">{this.state.error}</div>
        {/* <button className="button" type="submit" onClick={this.handleSubmit}>
          <div className="text">Calculate</div>
        </button> */}
      </div>
      <div className="answer">{this.state.output}</div>
    </div>
    );
  }
}

export default BinaryToDecimal;