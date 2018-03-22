import React from "react";

export default class ScreenRow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: props.value,
    };
  }
  render() {
    return (
      <div className="screen-row">
        <input type="text" readOnly value={this.state.value}/>
      </div>
    );
  }
}
