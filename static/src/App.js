import React, { Component } from 'react';
import './App.css';
import {  Link, NavLink } from 'react-router-dom';

class App extends Component {
  aboutTransition = () => {

  };
  render() {
    return (
      <div>
        <div className="myName-app">
          <div className="joseph-app">
            Joseph Sutorus
          </div>
        </div>
      <div className="backgroundContainer">
        <div className="cardContainer">
            <NavLink to="/about" onClick={this.aboutTransition} className="cardOne">
              <div className="myIcons">
                <i class="fas fa-user fa-10x"></i>
              </div>
            </NavLink>
            <NavLink to="/projects" className="cardTwo">
              <div className="myIcons">
                <i class="fas fa-code fa-10x"></i>
              </div>
            </NavLink>
            <NavLink to="/design" className="cardThree">
              <div className="myIcons">
                <i class="fas fa-coffee fa-10x"></i>
              </div>
            </NavLink>
            <NavLink to="/projects" className="cardFour">
              <div className="myIcons">
                <i class="fas fa-book fa-10x"></i>
              </div>
            </NavLink>
        </div>
      </div>
    </div>
    );
  }
}

export default App;
