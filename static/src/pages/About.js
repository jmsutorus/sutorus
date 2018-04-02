import React from "react";
import {  Link, NavLink } from 'react-router-dom'
import "./About.css";

export default class About extends React.Component {

  render() {
    return (
      <div className="backgroundStyle">
        <div className="navigation">
          <NavLink to="/projects" className="nav">Projects</NavLink>
          <NavLink to="/design" className="nav">Design</NavLink>
          <NavLink to="/" className="nav">Home</NavLink>
          <NavLink to="/projects" className="nav">Lorem</NavLink>
          <NavLink to="/about" className="navCurrent">About</NavLink>
        </div>
        <div className="myName">
          <div className="joseph">
            Joseph Sutorus
          </div>
          <hr className="lineBreak"/>
        </div>
        <div className="biography">
          <div className="divTitle">
            Biography
            <div className="blurb">
              Hi there, welcome to my site.  Who am I?
            </div>
          </div>
          <div className="p1">
            That’s a question that I can’t answer but I can say what I’ve done.  I grew up in Corona California which is on the eastern edge of Orange County.
            In the 8th grade me and my family moved to Austin Texas where I graduated from Vandegrift High School. I then moved to College Station to go to
            Texas A&M University where I graduated from in May of 2018 with a BS in Computer Science.  That’s about it.  Go check out some cool projects I’ve done or follow me on social media.
          </div>
        </div>
        <div className="space"></div>
        <div className="space"></div>
        <div className="contactMe">
          <a href="../jsresume.pdf" download="Joseph_Sutorus_Resume" className="contactCard">
            <i class="fas fa-file-pdf fa-2x"></i>
            <div className="resume">
              Résumé
            </div>
          </a>
        </div>
        <div className="talkMe">
          <div className="talktext">
            Let's Talk
          </div>
          <div className="talkBody">
            <i class="fas fa-envelope"></i>
            <div className="email">jmsutorus@gmail.com</div>
          </div>
        </div>
        <div className="media-bar">
          <div className="mediaIcons">
            <i class="fab fa-linkedin fa-2x"></i>
          </div>
          <div className="mediaIcons">
            <i class="fab fa-twitter-square fa-2x"></i>
          </div>
          <div className="mediaIcons">
            <i class="fab fa-facebook-square fa-2x"></i>
          </div>
          <div className="mediaIcons">
            <i class="fab fa-instagram fa-2x"></i>
          </div>
        </div>
      </div>
    );
  }
}
/*
<div className="mySkills">
  <div className="skillOne">
    UI/UX
    <div className="skillDesc">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Arcu felis bibendum ut tristique et egestas quis ipsum.
    </div>
  </div>
  <div className="skillTwo">
    Frontend
    <div className="skillDesc">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Arcu felis bibendum ut tristique et egestas quis ipsum.
    </div>
  </div>
  <div className="skillThree">
    Lorem ipsum
    <div className="skillDesc">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Arcu felis bibendum ut tristique et egestas quis ipsum.
    </div>
  </div>
  <div className="skillFour">
    Lorem ipsum
    <div className="skillDesc">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Arcu felis bibendum ut tristique et egestas quis ipsum.
    </div>
  </div>
</div>
*/
