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
              Hi there, welcome to my site.   Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </div>
          </div>
          <div className="p1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Arcu felis bibendum ut tristique et egestas quis ipsum. Mi tempus imperdiet nulla malesuada. Arcu felis bibendum ut tristique et egestas quis ipsum suspendisse. At erat pellentesque adipiscing commodo elit at imperdiet. Ultricies tristique nulla aliquet enim tortor. Sed felis eget velit aliquet sagittis id consectetur. Risus nullam eget felis eget nunc lobortis mattis aliquam. Morbi quis commodo odio aenean. Nec ultrices dui sapien eget mi. Odio eu feugiat pretium nibh. Dui faucibus in ornare quam viverra. Habitasse platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim. Egestas erat imperdiet sed euismod nisi porta. Vel pharetra vel turpis nunc eget lorem dolor sed. Aenean et tortor at risus viverra adipiscing at in. Scelerisque purus semper eget duis at. Orci eu lobortis elementum nibh tellus molestie nunc non blandit. Aliquam ultrices sagittis orci a.
          </div>
          <div className="p2">
            Nulla malesuada pellentesque elit eget. Quisque non tellus orci ac auctor augue mauris augue neque. Est ullamcorper eget nulla facilisi. Tellus rutrum tellus pellentesque eu tincidunt tortor aliquam nulla. Et molestie ac feugiat sed lectus vestibulum mattis ullamcorper velit. Leo vel fringilla est ullamcorper eget nulla facilisi etiam dignissim. Aenean sed adipiscing diam donec adipiscing. Nulla pellentesque dignissim enim sit. Eros donec ac odio tempor orci dapibus ultrices in iaculis. Quis viverra nibh cras pulvinar mattis nunc sed blandit libero
          </div>
          <div className="p3">
            Nulla malesuada pellentesque elit eget. Quisque non tellus orci ac auctor augue mauris augue neque. Est ullamcorper eget nulla facilisi. Tellus rutrum tellus pellentesque eu tincidunt tortor aliquam nulla. Et molestie ac feugiat sed lectus vestibulum mattis ullamcorper velit. Leo vel fringilla est ullamcorper eget nulla facilisi etiam dignissim. Aenean sed adipiscing diam donec adipiscing. Nulla pellentesque dignissim enim sit. Eros donec ac odio tempor orci dapibus ultrices in iaculis. Quis viverra nibh cras pulvinar mattis nunc sed blandit libero. Facilisis magna etiam tempor orci eu. Fames ac turpis egestas integer.
          </div>
        </div>
        <div className="space"></div>
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
        <div className="myProjects">
          Projects
          <div>

          </div>
        </div>
        <div className="myDesign">
          Things i've made
          <div>

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
        <div className="madeIn-bar">
          <div className="madeText">
            made with coffee in austin
          </div>
        </div>
      </div>
    );
  }
}
