import React, { Component } from "react";
import "./Nosedive.css";
import JoeAndSam from "../../JoeAndSam.JPG";

class Nosedive extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const value = event.target.value;
    this.setState({ [event.target.name]: value });
  }

  calculate() {}

  render() {
    return (
      <div className="">
        <div className="topbar">
          <div>Name Image</div>
          <div>Search</div>
          <div>User</div>
        </div>
        <div className="nosedive-body">
          <div className="nosedive-profile">
            <div className="nosedive-menu-icon">
              <i class="fas fa-bars fa-lg" />
            </div>
            <div className="nosedive-image-wrapper">
              <img className="nosedive-image" alt="" src={JoeAndSam} />
            </div>
            <div className="nosedive-name">Joseph Sutorus</div>
            <div className="nosedive-description">
              hello there. general kenobi
            </div>
            <div className="nosedive-social-wrapper">
              <div className="nosedive-social-score">
                <div className="nosedive-social-name">Score</div>
                <div className="nosedive-score">8.0</div>
              </div>
              <div className="nosedive-social-score">
                <div className="nosedive-social-name">Reviews</div>
                <div className="nosedive-score">147</div>
              </div>
            </div>
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
