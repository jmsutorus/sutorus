import React from "react";
import SearchField from "./SearchField.js";

const baseStyles = {
    open: {
        width: 300,
    },
    closed: {
        width: 0,
    },
    smallIcon: {
        width: 30,
        height: 30
    },
    icon: {
        width: 40,
        height: 40,
        padding: 5,
        top: 10
    },
    frame: {
        border: 'solid 1px black',
        borderRadius: 5
    }
};

export default class SearchBox extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
          isOpen: false,
      };
  }
  onClick() {
    const currentState = this.state.isOpen;
    this.setState({ isOpen: !currentState });
  }
  render() {
    const textStyle = this.state.isOpen ? baseStyles.open : baseStyles.closed;
    const divStyle = Object.assign({}, textStyle, baseStyles.frame);
    divStyle.width += baseStyles.icon.width + 5;
    return (
      <div>
        {divStyle.width}
        <SearchField name='search' style={divStyle} onClick={() => this.onClick()}>

        </SearchField>
      </div>
    );
  }
}
