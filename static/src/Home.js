import React, { Component } from "react";
import { Redirect } from "react-router";
import "./Home.css";
import david from "./david.png";
import sad from "./sadboy.gif";
import writing from "./writing.gif";
import family from "./family.png";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Joseph Sutorus",
      index: 0,
      redirectAbout: false,
      redirectProfile: false,
      redirectHome: false,
      redirectBlog: false,
    };
    this.handleOnClick = this.handleOnClick.bind(this);
    this.routeAbout = this.routeAbout.bind(this);
    this.routeProfile = this.routeProfile.bind(this);
    this.routeHome = this.routeHome.bind(this);
    this.routeBlog = this.routeBlog.bind(this);
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  handleOnClick(event) {
    const value = event.target.value;
    this.setState({ [event.target.name]: value });
  }
  routeAbout(event) {
    this.setState({ redirectAbout: true });
  }
  routeProfile(event) {
    this.setState({ redirectProfile: true });
  }
  routeHome(event) {
    this.setState({ redirectHome: true });
  }
  routeBlog(event) {
    this.setState({ redirectBlog: true });
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
    if (this.state.redirectBlog) {
      return <Redirect push to="/blog" />;
    }
    return (
      <div className="home">
        <div className="home-topbar">
          <div>
            <button
              className="home-button current-page"
              onClick={this.routeHome}
            >
              {this.state.name}
            </button>
          </div>
          <div>
            <button className="home-button" onClick={this.routeAbout}>
              About
            </button>
            <button className="home-button" onClick={this.routeProfile}>
              Projects
            </button>
          </div>
        </div>
        <div className="home-body">
          <div className="body-text">I create websites and stuff.</div>
          <div className="box-wrapper">
            <button className="body-box" onClick={this.routeAbout}>
              <div className="box-image-wrapper">
                <img className="box-image" alt="" src={david} />
              </div>
              <div className="box-text">Me</div>
            </button>
            <button className="body-box" onClick={this.routeProfile}>
              <div className="box-image-wrapper">
                <img className="sad-image" alt="" src={sad} />
              </div>
              <div className="box-text">Projects</div>
            </button>
            <a className="body-box" href="https://samsutorus.com/">
              <div className="box-image-wrapper">
                <img className="sad-image" alt="" src={family} />
              </div>
              <div className="box-text">Family</div>
            </a>
            <a className="body-box" href="https://dev.to/joseph_sutorus">
              <div className="box-image-wrapper">
                <img className="writing-image" alt="" src={writing} />
              </div>
              <div className="box-text">&#60;Blog/&#62;</div>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
