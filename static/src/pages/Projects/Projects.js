import React from "react";
import "./Projects.css";
import {  Link, NavLink } from 'react-router-dom';

export default class Projects extends React.Component {

  render() {
    return (
      <div>
        <NavLink to="/projects/calculator" className="nav">Calculator</NavLink>
        Chess
        <NavLink to="/projects/twofoureight" className="nav">2048</NavLink>
        <NavLink to="/projects/tictactoe" className="nav">Tictactoe</NavLink>
        recall
      </div>
    );
  }
}
