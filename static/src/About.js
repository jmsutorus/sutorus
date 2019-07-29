import React, { Component } from 'react';
import { Redirect } from 'react-router';
import berdo from './San-Bernadino.jpg';
import frontend from './frontend.png';
import heb from './762_original.jpg';
import tamu from './tamu.jpg';

class About extends Component {

    constructor(props) {
      super(props);
      this.state = {
      };
      this.handleOnClick = this.handleOnClick.bind(this);
      this.routeProfile = this.routeProfile.bind(this);
      this.routeHome = this.routeHome.bind(this);
    }

    componentDidMount() {
      window.scrollTo(0, 0)
    }
  
    handleOnClick(event) {
      const value = event.target.value;
      this.setState({[event.target.name]: value});
    }
    routeProfile(event) {
      this.setState({redirectProfile: true});
    }
    routeHome(event) {
      this.setState({redirectHome: true});
    }
  
    render() {
      if (this.state.redirectProfile) {
        return <Redirect push to="/projects" />;
      }
      if (this.state.redirectHome) {
        return <Redirect push to="/" />;
      }
      return (
      <div className="home">
        <div className="home-topbar">
          <div>
            <button className="home-button" onClick={this.routeHome}>Joseph Sutorus</button>
          </div>
          <div>
            <button className="home-button current-page">About</button>
            <button className="home-button" onClick={this.routeProfile}>Projects</button>
          </div>
        </div>
        <div className="home-body">
          <div className="body-text">About</div>
          <div className="about-info-wrapper">
            <div className="info-item">Grew up in SoCal.</div>
            <div className="info-item">Studied Computer Science with a focus in frontend development and UX.</div>
            <div className="info-item">Earned minors in both maths and buisness.</div>
            <div className="info-item">Graduated from Texas A&M in 2018 with honors.</div>
            <div className="info-item">Went to work at H-E-B as a frontend software developer.</div>
          </div>
        </div>
      </div>
      );
    }
  }
  
  export default About;