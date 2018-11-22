import React, { Component } from 'react';
import './App.css';
import { NavLink } from 'react-router-dom';

class App extends Component {
  aboutTransition = () => {

  };
  render() {
    return (
      <div className="home-page">
        <div className="topbar">
          <div className="icon-wrapper">
            <div>Icon</div>
          </div>
          <div className="links-wrapper">
            <NavLink to="/about" className="link"
            onClick={this.aboutTransition}>
              <div>Profile</div>
            </NavLink>
            <NavLink to="/about" className="link"
            onClick={this.aboutTransition}>
              <div>Work</div>
            </NavLink>
            <NavLink to="/about" className="link"
            onClick={this.aboutTransition}>
              <div>Contact</div>
            </NavLink>
          </div>
        </div>
        <div className="body">body</div>
    </div>
    );
  }
}

export default App;
