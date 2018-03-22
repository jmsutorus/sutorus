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
  render() {
    return (
      <div>
          <div class="ripple" onClick={this.props.onClick}>
            {this.state.currentNumber}
          </div>
      </div>
    );
  }
}
