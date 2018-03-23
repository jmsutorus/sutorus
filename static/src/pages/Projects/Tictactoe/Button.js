import React from "react";
import "./Button.css";
export default class Projects extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentNumber: props.currentNumber,
    };
  }
  componentDidMount() {
    console.log('button did mount.');
}
  componentWillReceiveProps(nextProps){
    this.setState({ currentNumber: nextProps.currentNumber,});
  }
  xOro() {
    if(this.state.currentNumber == 1) {
      return "X";
    }
    else if(this.state.currentNumber == 2) {
      return "O";
    }
    else {
      return "";
    }
  }
  render() {
    return (
      <div>
          <div class="ttt-ripple" onClick={this.props.onClick}>
            <div class="ttt-char-style">
              {this.xOro()}
            </div>
          </div>
      </div>
    );
  }
}
