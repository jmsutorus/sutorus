import React from "react";
import "./Projects.css";
import {  Link, NavLink } from 'react-router-dom';

export default class Projects extends React.Component {

  render() {
    return (
      <div>
        <div className="myName-app">
          <div className="joseph-app">
            Projects
          </div>
        </div>
        <div className="backgroundContainer-projects">
          <div className="projects-container">
            <NavLink to="/projects/calculator" className="cardOne-projects">
            <div className="inner-text">
              Calculator
            </div>
          </NavLink>
            <NavLink to="/projects/react2048" className="cardTwo-projects">
              <div className="inner-text">
                React 2048
              </div>
            </NavLink>
            <NavLink to="/projects/tictactoe" className="cardThree-projects">
            <div className="inner-text">
              Tictactoe
            </div>
            </NavLink>
            <NavLink to="/projects/animations" className="cardFour-projects">
            <div className="inner-text">
              Animations
            </div>
            </NavLink>
          </div>
        </div>
      </div>
    );
  }
}
