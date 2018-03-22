import React from "react";
import Screen from "./Screen.js";
import CalButton from "./CalButton.js";

export default class Frame extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      question: "",
      answer: "",
    };
  }
  renderScreen(e, i) {
    return <Screen  question={e} answer={i}/>;
  }
  renderButton(e, i) {
    return <CalButton label={e} onClick={this.handleClick.bind(this)}  type={i} />
  }
  getKeyboardInput(e) {
    const key = event.keyCode;
    console.log(key);
    handleClick(key);
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
        default: {
          // for every other commmand, update the answer in the state
          this.setState({ question: this.state.question += value})
          break;
        }
      }
    }
  render() {
    return (
      <div className="frame" onKeyDown={this.getKeyboardInput}>
        <div className="calculator-title">
          R_N Calculator
        </div>
        {this.renderScreen(this.state.question, this.state.answer)}
        <div className="buttonRow">
          {this.renderButton("AC", "action")}
          {this.renderButton("+/1", "input")}
          {this.renderButton("%", "input")}
          {this.renderButton("/", "action")}
        </div>
        <div className="buttonRow">
          {this.renderButton("7", "input")}
          {this.renderButton("8", "input")}
          {this.renderButton("9", "input")}
          {this.renderButton("*", "action")}
        </div>
        <div className="buttonRow">
          {this.renderButton("4", "input")}
          {this.renderButton("5", "input")}
          {this.renderButton("6", "input")}
          {this.renderButton("-", "action")}
        </div>
        <div className="buttonRow">
          {this.renderButton("1", "input")}
          {this.renderButton("2", "input")}
          {this.renderButton("3", "input")}
          {this.renderButton("+", "action")}
        </div>
        <div className="buttonRow">
          {this.renderButton("0", "input")}
          {this.renderButton(".", "input")}
          {this.renderButton("=", "action")}
        </div>
      </div>
    );
  }
}
