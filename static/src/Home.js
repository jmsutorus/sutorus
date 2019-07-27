import React, { Component } from 'react';
import { Redirect } from 'react-router';
import './Home.css';
import david from './david.png';
import sad from './sadboy.gif';

class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: 'Joseph Sutorus',
      index: 0,
      redirectAbout: false,
      redirectProfile: false,
      redirectHome: false
    };
    this.handleOnClick = this.handleOnClick.bind(this);
    this.routeAbout = this.routeAbout.bind(this);
    this.routeProfile = this.routeProfile.bind(this);
    this.routeHome = this.routeHome.bind(this);
  }

  handleOnClick(event) {
    const value = event.target.value;
    this.setState({[event.target.name]: value});
  }
  routeAbout(event) {
    this.setState({redirectAbout: true});
  }
  routeProfile(event) {
    this.setState({redirectProfile: true});
  }
  routeHome(event) {
    this.setState({redirectHome: true});
  }

  render() {
    if (this.state.redirectAbout) {
      return <Redirect push to="/about" />;
    }
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
            <button className="home-button current-page" onClick={this.routeHome}>{ this.state.name }</button>
          </div>
          <div>
            <button className="home-button" onClick={this.routeAbout}>About</button>
            <button className="home-button" onClick={this.routeProfile}>Projects</button>
          </div>
        </div>
        <div className="home-body">
          <div className="body-text">I create websites and stuff.</div>
          <div className="box-wrapper">
            <button className="body-box" onClick={this.routeAbout}>
              <div className="box-image-wrapper"><img className="box-image" alt="" src={david}></img></div>
              <div className="box-text">About</div>
            </button>
            <button className="body-box" onClick={this.routeProfile}>
              <div className="box-image-wrapper"><img className="sad-image" alt="" src={sad}></img></div>
              <div className="box-text">Projects</div>
            </button>
            <button className="body-box">
              <div className="box-image-wrapper"></div>
              <div className="box-text">Family</div>
            </button>
            <button className="body-box">
              <div className="box-image-wrapper"></div>
              <div className="box-text">About</div>
            </button>
          </div>
        </div>
    </div>
    );
  }
}

export default Home;