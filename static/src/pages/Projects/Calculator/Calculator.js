import React from "react";
import Screen from "./Screen.js";
import CalButton from "./CalButton.js";

var pageStyle = {
  height: "100%",
  width: "100%",
}
var calcStyle = {
  textAlign: "center",
}
var tilteStyle = {
  fontSize: "25px",
}
export default class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.getKeyboardInput = this.getKeyboardInput.bind(this);
    this.state = {
      question: "",
      answer: "",
    };
  }
  renderScreen(e, i) {
    return <Screen  value={e} styling={i}/>;
  }
  renderButton(e, i, o) {
    return <CalButton label={e} onClick={this.handleClick.bind(this)}  type={i} styling={o}/>
  }
  getKeyboardInput=(e)=>{
    const value = e.key;
    switch (value) {
      case '=': case 'Enter': { // if it's an equal sign, use the eval module to evaluate the question
        // convert the answer (in number) to String
        const answer = eval(this.state.question).toString();
        // update answer in our state.
        this.setState({ answer });
        break;
      }
      case 'AC': {
        // if it's the Cls sign, just clean our question and answer in the state
        this.setState({ question: '', answer: '' });
        break;
      }
      case '1': case '2': case '3': case '4': case '5': case '6': case '7': case '8': case '9': case '0': case '+': case '-': case '/': case '*': case '%': case '(': case ')': {
        this.setState({ question: this.state.question += value});
        break;
      }
      case 'Backspace': {
        this.setState({ question: this.state.question.substring(0,this.state.question.length-1)});
        break;
      }
      default: {
      }
    }
  }
  handleClick(event) {
      const value = event.target.value; // get the value from the target element (button)
      switch (value) {
        case '=': { // if it's an equal sign, use the eval module to evaluate the question
          // convert the answer (in number) to String
          const answer = eval(this.state.question).toString();
          // update answer in our state.
          this.setState({ answer });
          break;
        }
        case 'AC': {
          // if it's the Cls sign, just clean our question and answer in the state
          this.setState({ question: '', answer: '' });
          break;
        }
        case '<=': {
          this.setState({ question: this.state.question.substring(0,this.state.question.length-1)});
          break;
        }
        default: {
          // for every other commmand, update the answer in the state
          this.setState({ question: this.state.question += value})
          break;
        }
      }
    }
  render() {
    return (
      <div>
      <div className="calculator" style={pageStyle} onKeyDown={this.getKeyboardInput}  tabIndex="0">
        <div style={calcStyle}>
          <div style={tilteStyle}>
            React Calculator
          </div>
          {this.renderScreen(this.state.question, 1)}
          {this.renderScreen(this.state.answer, 0)}
          <div className="allButtonRows">
            <div className="buttonRow">
              {this.renderButton("AC", "action", 1)}
              {this.renderButton("<=", "input", 1)}
              {this.renderButton("%", "input", 1)}
              {this.renderButton("/", "action", 1)}
            </div>
            <div className="buttonRow">
              {this.renderButton("7", "input", 0)}
              {this.renderButton("8", "input", 0)}
              {this.renderButton("9", "input", 0)}
              {this.renderButton("*", "action", 1)}
            </div>
            <div className="buttonRow">
              {this.renderButton("4", "input", 0)}
              {this.renderButton("5", "input", 0)}
              {this.renderButton("6", "input", 0)}
              {this.renderButton("-", "action", 1)}
            </div>
            <div className="buttonRow">
              {this.renderButton("1", "input", 0)}
              {this.renderButton("2", "input", 0)}
              {this.renderButton("3", "input", 0)}
              {this.renderButton("+", "action", 1)}
            </div>
            <div className="buttonRow">
              {this.renderButton("0", "input", 2)}
              {this.renderButton(".", "input", 0)}
              {this.renderButton("=", "action", 1)}
            </div>
          </div>
        </div>
      </div>
    </div>
    );
  }
}
