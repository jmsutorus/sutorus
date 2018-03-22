import React, { Component } from 'react';
import {  Link, NavLink } from 'react-router-dom'
import "./Design.css";

export default class Design extends React.Component {

  render() {
    return (
      <div className="background">
        <div className="navigation">
          <NavLink to="/projects" className="nav">Projects</NavLink>
          <NavLink to="/design" className="navCurrent">Design</NavLink>
          <NavLink to="/" className="nav">Home</NavLink>
          <NavLink to="/projects" className="nav">Lorem</NavLink>
          <NavLink to="/about" className="nav">About</NavLink>
        </div>
        <div className="designspace"></div>
        <div className="poster">
          <img src="Artboard 1@0.75x.png" alt="joseph sutorus" className="poster-sizing"></img>
        </div>
      </div>
    );
  }
}
