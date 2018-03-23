import React from "react";
import "./Projects.css";
import {  Link, NavLink } from 'react-router-dom';

export default class Projects extends React.Component {

  render() {
    return (
      <div>
        <NavLink to="/projects/calculator" className="nav">Calculator</NavLink>
        Chess
        <NavLink to="/projects/react2048" className="nav">React2048</NavLink>
        <NavLink to="/projects/tictactoe" className="nav">Tictactoe</NavLink>
        <NavLink to="/projects/animations" className="nav">Animations</NavLink>
        recall
      </div>
    );
  }
}
