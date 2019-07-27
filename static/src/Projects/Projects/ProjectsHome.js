import React, { Component } from 'react';
import { Redirect } from 'react-router';

class ProjectsHome extends Component {

  constructor(props) {
    super(props);
    this.state = {
      redirect: '',
      redirectAbout: false,
      redirectProfile: false,
      redirectHome: false
    };
    this.handleOnClick = this.handleOnClick.bind(this);
    this.routeAbout = this.routeAbout.bind(this);
    this.routeHome = this.routeHome.bind(this);
  }

  handleOnClick(event) {
    const value = event;
    this.setState({redirect: value});
  }
  routeAbout(event) {
    this.setState({redirectAbout: true});
  }
  routeHome(event) {
    this.setState({redirectHome: true});
  }

  render() {
    if (this.state.redirect !== '') {
      return <Redirect push to={'/projects/' + this.state.redirect} />;
    }
    if (this.state.redirectAbout) {
      return <Redirect push to="/about" />;
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
            <button className="home-button" onClick={this.routeAbout}>About</button>
            <button className="home-button current-page">Projects</button>
          </div>
        </div>
        <div className="projects-page">
          <div className="projects-header">Projects</div>
          <button className="project-button" onClick={() => this.handleOnClick('numbers')}>
            <div className="project-button-inner"></div>
            <div className="project-button-text">Numbers</div>
          </button>
          <button className="project-button" onClick={() => this.handleOnClick('calculator')}>
            <div className="project-button-inner"></div>
            <div className="project-button-text">Calculator</div>
          </button>
          <button className="project-button" onClick={() => this.handleOnClick('photos')}>
            <div className="project-button-inner"></div>
            <div className="project-button-text">Photos</div>
          </button>
          <button className="project-button" onClick={() => this.handleOnClick('nosedive')}>
            <div className="project-button-inner"></div>
            <div className="project-button-text">Nosedive</div>
          </button>
        </div>
      </div>
    );
  }
}

export default ProjectsHome;