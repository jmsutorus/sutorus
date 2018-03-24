import React from "react";

import "./SaveButton.css";

export default class SaveButton extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        width: props.width,
        height: props.height,
        text: props.text,
        loading: "save",
      };
  }
  componentDidMount() {
  }
  componentWillReceiveProps(nextProps){
    this.setState({ width: nextProps.width,});
    this.setState({ height: nextProps.height,});
  }
  onClick() {
    const currentState = this.state.loading;
    if(currentState == "save") {
        this.setState({ loading: "loading" });
    }
    else {
      this.setState({ loading: "save" });
    }
  }
  getIcon(e) {
    if(e == "save") {
      return <i class="fas fa-check" color="white"></i>
    }
    else {
      return <i class="fas fa-cog fa-spin" color="white"></i>
    }
  };
  getText(e, a) {
    if(e == "save") {
      return a;
    }
    else {
      return "Working...";
    }
  };
  render() {
    var buttonStyle = {
      width: this.state.width,
      height: this.state.height,
    };
    var textStyle = {
    };
    return (
      <div class={"save-button-"+this.state.loading} style={buttonStyle}  onClick={() => this.onClick()}>
        {this.getIcon(this.state.loading)}
        <div class="save-text">
          {this.getText(this.state.loading, this.state.text)}
        </div>
      </div>
    );
  }
}
