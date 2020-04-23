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
      <div className="nosedive">
        <div className="topbar">
          <div className="topbar-user-wrapper">
            <img
              className="nd-user-img"
              alt="Joseph User Image"
              src={JoeAndSam}
            />
          </div>
          <div className="search-container">
            <div className="photo-input-wrapper">
              <div className="topbar-search-icon">
                <i className="fas fa-search" />
              </div>
              <input className="seach-input" placeholder="search" />
            </div>
          </div>
        </div>
        <div className="nosedive-body">
          <div className="nosedive-profile">
            <div className="nosedive-menu-icon">
              <i class="far fa-edit fa-lg" />
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
                <div className="nosedive-score">4.0</div>
              </div>
              <div className="nosedive-social-score">
                <div className="nosedive-social-name">Reviews</div>
                <div className="nosedive-score">147</div>
              </div>
            </div>
          </div>
          <div className="reviews">
            <div className="single-review">
              <div className="nd-user-id">
                <img
                  className="nd-user-img"
                  alt="Joseph User Image"
                  src={JoeAndSam}
                />
                <div className="nd-user-name-wrapper">
                  <div className="nd-user-name">Joseph Sutorus</div>
                  <a className="nd-user-name-id" href="/">
                    @jmsutorus
                  </a>
                </div>
              </div>
              <div className="ng-user-review">4.3</div>
            </div>
            <div className="single-review">
              <div className="nd-user-id">
                <img
                  className="nd-user-img"
                  alt="Joseph User Image"
                  src={JoeAndSam}
                />
                <div className="nd-user-name-wrapper">
                  <div className="nd-user-name">Joseph Sutorus</div>
                  <a className="nd-user-name-id" href="/">
                    @jmsutorus
                  </a>
                </div>
              </div>
              <div className="ng-user-review">4.3</div>
            </div>
            <div className="single-review">
              <div className="nd-user-id">
                <img
                  className="nd-user-img"
                  alt="Joseph User Image"
                  src={JoeAndSam}
                />
                <div className="nd-user-name-wrapper">
                  <div className="nd-user-name">Joseph Sutorus</div>
                  <a className="nd-user-name-id" href="/">
                    @jmsutorus
                  </a>
                </div>
              </div>
              <div className="ng-user-review">4.3</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Nosedive;
