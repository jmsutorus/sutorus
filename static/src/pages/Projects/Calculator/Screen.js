import React from "react";

var screenTopStyle = {
  display: "block",
  blockSizing: "border-box",
  height: "30px",
  width: "260px",
  marginLeft: "auto",
  marginRight: "auto",
  borderTop: "none",
  backgroundColor: "#22313F",
  color: "#E4F1FE",
  padding: 0,
  border: 0,
  fontSize: "25px",
};

var screenBottomStyle = {
  display: "block",
  blockSizing: "border-box",
  height: "30px",
  width: "260px",
  marginLeft: "auto",
  marginRight: "auto",
  borderBottom: "none",
  backgroundColor: "#22313F",
  color: "#E4F1FE",
  padding: 0,
  border: 0,
  fontSize: "25px",
};

export default class Screen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: props.value,
      styling: props.styling,
    };
  }
  componentWillReceiveProps(nextProps){
   this.setState({
     value: nextProps.value,
     styling: nextProps.styling,
   })
  }
  getStyle() {
    if(this.state.styling == 0) {
      return screenTopStyle;
    }
    else {
      return screenBottomStyle;
    }
  }
  render() {
    return (
      <input style={this.getStyle()} type="text" readOnly value={this.state.value}/>
    );
  }
}
