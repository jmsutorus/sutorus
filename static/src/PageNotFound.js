import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class PageNotFound extends Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
    <div className="home-page">
      404 PageNotFound
    </div>
    );
  }
}

export default PageNotFound;