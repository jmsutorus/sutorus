import React, { Component } from 'react';
import '../FindPI/FindPI.css';
import { NavLink } from 'react-router-dom';

class HappyNumbers extends Component {

  constructor(props) {
    super(props);
    this.state = {
        start: '',
        isHappy: '',
        error: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const value = event.target.value;
    this.setState({[event.target.name]: value});
  }

  calculate(num) {
    let c = [];
    let m = 0;
    let n = 0;
    while(num != 1 && c[num] !== true) 
    {
        c[num] = true ;
        m = 0 ;
        while (num > 0) {
            n = num % 10 ;
            m += n * n ;
            num = (num  - n) / 10 ;
        }
        num = m ;
    }
    if (num === 1) {
      this.setState({isHappy: 'Is Happy'});
    } else {
      this.setState({isHappy: 'Not Happy'});
    }
  }

  handleSubmit(event) {
    if (this.state.start === '') {
      this.setState({error: 'Must enter a value'});
    } else {
      if (!isNaN(this.state.start)) {
        this.setState({error: ''});
        this.calculate(parseInt(this.state.start));
      } else {
        this.setState({error: 'Must be a number'});
      }
    }
  }

  render() {
    return (
    <div className="module">
      <div className="title">Happy Numbers</div>
      <div className="body">
        <div className="input-wrapper">
          <div className="input-title">Number</div>
          <input className="input" type="text" name="start" value={this.state.start} onChange={this.handleChange}/>
        </div>
        <div className="error">{this.state.error}</div>
        <button className="button" type="submit" onClick={this.handleSubmit}>
          <div className="text">Calculate</div>
        </button>
      </div>
      <div className="answer">{this.state.isHappy}</div>
    </div>
    );
  }
}

export default HappyNumbers;