import React, { Component } from 'react';
import './Calculator.css';

function peek(array) {
  return array.slice(-1)[0];
};

function precedence(token) {
  switch (token.value) {
    case '^': {
      return 4;
    }
    case '*': {
      return 3;
    }
    case '/': {
      return 3;
    }
    default: {
      return 2;
    }
  }
};

/*
A simple calculator to do basic operators. Make it a scientific calculator for added complexity.
*/
class Calculator extends Component {

  constructor(props) {
    super(props);
    this.state = {
      text: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  calculate(text) {
    // tokens
    let tokens = [];
    let tIndex = -1;
    for (let i = 0; i < text.length; i++) {
      switch (text[i]) {
        case '-': {
          tokens.push({value: '-', type: 'Operator'});
          tIndex++;
          break;
        }
        case '+': {
          tokens.push({value: '+', type: 'Operator'});
          tIndex++;
          break;
        }
        case '/': {
          tokens.push({value: '/', type: 'Operator'});
          tIndex++;
          break;
        }
        case '*': {
          tokens.push({value: '*', type: 'Operator'});
          tIndex++;
          break;
        }
        case '(': {
          tokens.push({value: '(', type: 'Left Parenthesis'});
          tIndex++;
          break;
        }
        case ')': {
          tokens.push({value: ')', type: 'Right Parenthesis'});
          tIndex++;
          break;
        }
        default: {
          if (tIndex < 0 || tokens[tIndex].type === 'Operator' ||
          tokens[tIndex].type === 'Left Parenthesis' || tokens[tIndex].type === 'Right Parenthesis') {
            tokens.push({value: parseInt(text[i]), type: 'Literal'});
            tIndex++;
          } else {
            tokens[tIndex].value += parseInt(text[i]);
          }
        }
      }
    }
    console.log(tokens);
    // parse to RPN
    let queue = [];
    let stack = [];
    for (let i = 0; i < tokens.length; i++) {
      if (tokens[i].type === 'Literal') {
        queue.push(tokens[i]);
      }
      else if (tokens[i].type === 'Operator') {
        while (
          peek(stack)
          && (peek(stack).type === 'Operator')
          && (precedence(tokens[i]) <= precedence(peek(stack)))) {
            queue.push(stack.pop());
        }
        stack.push(tokens[i]);
      }
      else if (tokens[i].type === 'Left Parenthesis') {
        stack.push(tokens[i]);
      }
      else if (tokens[i].type === 'Right Parenthesis') {
        console.log('right');
        while (peek(stack) && peek(stack).type !== 'Left Parenthesis') {
          console.log(stack);
          queue.push(stack.pop());
        }
        stack.pop();
      }
    }
    while (peek(stack)) {
      queue.push(stack.pop());
    }
    let rpn = queue;
    let index = 0;
    while (rpn.length > 1) {
      let inter = 0;
      if (rpn[index].type === 'Operator') {
        switch (rpn[index].value) {
          case '*': {
            console.log(rpn[index-2].value + ' * ' + rpn[index-1].value);
            inter = (rpn[index-2].value * rpn[index-1].value);
            break;
          }
          case '+': {
            console.log(rpn[index-2].value + ' + ' + rpn[index-1].value);
            inter = (rpn[index-2].value + rpn[index-1].value);
            break;
          }
          case '/': {
            console.log(rpn[index-2].value + ' / ' + rpn[index-1].value);
            inter = (rpn[index-2].value / rpn[index-1].value);
            break;
          }
          default: {
            console.log(rpn[index-2].value + ' - ' + rpn[index-1].value);
            console.log(rpn[index-2].value - rpn[index-1].value);
            inter = (rpn[index-2].value - rpn[index-1].value);
          }
        }
        console.log(inter);
        rpn.splice(index-2, 3);
        rpn.splice(index-2, 0, {value: inter, type: 'Literal'});
        index = 0;
      } else {
        index++;
      }
    }
    console.log(rpn[0].value);
  }

  handleChange(e) {
    switch (e) {
      case 'AC': {
        this.setState({text: ''});
        break;
      }
      case '=': {
        this.calculate(this.state.text);
        break;
      }
      default: {
        this.setState({text: this.state.text + e})
      }
    }
  }

  handleSubmit(e) {
  }

  render() {
    return (
    <div className="calculator">
      <div>{this.state.text}</div>
      <div>
        <Row c1="(" c2=")" c3="%" c4="AC" addInput={this.handleChange}/>
        <Row c1="7" c2="8" c3="9" c4="/" addInput={this.handleChange}/>
        <Row c1="4" c2="5" c3="6" c4="*" addInput={this.handleChange}/>
        <Row c1="1" c2="2" c3="3" c4="-" addInput={this.handleChange}/>
        <Row c1="0" c2="." c3="=" c4="+" addInput={this.handleChange}/>
      </div>
    </div>
    );
  }
}

function Row(props) {
  return (
    <div className="row">
      <Button value={props.c1} addInput={() => props.addInput(props.c1)}></Button>
      <Button value={props.c2} addInput={() => props.addInput(props.c2)}></Button>
      <Button value={props.c3} addInput={() => props.addInput(props.c3)}></Button>
      <Button value={props.c4} addInput={() => props.addInput(props.c4)}></Button>
    </div>
  );
}

function Button(props) {
  return (
    <button className="button" onClick={() => {props.addInput(props.value)}}>{props.value}</button>
  );
}

export default Calculator;