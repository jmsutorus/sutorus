import React from "react";

import "./SearchBox.css";

export default class SearchIcon extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
      };
  }
  componentDidMount() {
}
  componentWillReceiveProps(nextProps){
  }
  render() {
    return (
      <div class="search-icon">
        <i class="fas fa-search"></i>
      </div>
    );
  }
}
