import React from "react";
import SearchIcon from "./SearchIcon.js";

import "./SearchBox.css";

export default class SearchField extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
          name: props.name,
          style: props.style,
      };
  }
  componentDidMount() {
}
  componentWillReceiveProps(nextProps){
    this.setState({ style: nextProps.style,});
  }
  render() {
    return (
      <div onClick={this.props.onClick}>
        <SearchIcon />
        <input type="text" class="box-style" style={this.state.style}>
        </input>
      </div>
    );
  }
}
