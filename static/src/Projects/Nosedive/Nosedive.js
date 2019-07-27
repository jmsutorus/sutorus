import React, { Component } from 'react';
import './Nosedive.css';

class Nosedive extends Component {

  constructor(props) {
    super(props);
    this.state = {
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const value = event.target.value;
    this.setState({[event.target.name]: value});
  }

  calculate() {
  }

  render() {
    return (
    <div className="">
        <div className="topbar">
            <div>Name Image</div>
            <div>Search</div>
            <div>User</div>
        </div>
        <div className="body">
            <div className="user-profile">
                <div className="user-score">user-score</div>
                <div className="user-name">user-name</div>
            </div>
            <div className="reviews">
                <div className="single-review">single-review</div>
            </div>
            <div className="user-friends">
                <div className="single-friend">single-friend</div>
            </div>
        </div>
        <div>Footer</div>
    </div>
    );
  }
}

export default Nosedive;