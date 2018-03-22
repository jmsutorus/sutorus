import React from "react";

var buttonStyle = {
  width: "65px",
  height: "65px",
  margin: 0,
  padding: 0,
  border: 0,
  background: "transparent",
  fontFamily: "inherit",
  border: ".1px solid black",
  overflow: "hidden",
  fontSize: "25px",
}
var buttonStyleZero = {
  width: "130px",
  height: "65px",
  margin: 0,
  padding: 0,
  border: 0,
  background: "transparent",
  fontFamily: "inherit",
  border: ".1px solid black",
  overflow: "hidden",
  fontSize: "25px",
}
var buttonActiveStyle = {
  width: "65px",
  height: "65px",
  margin: 0,
  padding: 0,
  border: 0,
  background: "transparent",
  fontFamily: "inherit",
  border: ".1px solid black",
  overflow: "hidden",
  fontSize: "25px",
  backgroundColor: "#EB974E",
}

export default class CalButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      type: props.type,
      label: props.label,
      styling: props.styling,
    };
  }
  getButtonStyle() {
    if (this.state.styling == 2) {
      return buttonStyleZero;
    }
    if (this.state.styling == 1) {
      return buttonActiveStyle;
    }
    else {
      return buttonStyle;
    }
  }
  render() {
    return (
      <input type="button" style={this.getButtonStyle()} onClick={this.props.onClick} value={this.state.label}/>
    );
  }
}
