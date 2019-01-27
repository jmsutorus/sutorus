import React, { Component } from 'react';
import './Calculator.css';

/*
A simple calculator to do basic operators. Make it a scientific calculator for added complexity.
*/
class Calculator extends Component {

  constructor(props) {
    super(props);
    this.state = {
      text: '',
      inputInter: '',
      answer: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  handleChange(e) {
    const value = e.target.value;
    this.setState({[e.target.name]: value});
  }

  handleSubmit(e) {
    let ans = determineOutput(this.state.text);
    let inter = this.state.text;
    this.setState({
      answer: ans,
      inputInter: inter
    });
  }

  handleKeyPress(e) {
    if (e.key == 'Enter'){
      this.handleSubmit();
    }
  }

  render() {
    return (
    <div className="calculator">
      <div className="calc-title">Wolfram Beta</div>
      <div className="calc-input-wrapper">
        <input className="input-text" placeholder="Fuck off" name="text" value={this.state.text} onChange={this.handleChange} onKeyPress={this.handleKeyPress}></input>
      </div>
      <div>
        <button onClick={this.handleSubmit}>Find that shit</button>
      </div>
      <div className="calc-body">
        <div className="calc-body-item">
          <div className="calc-body-item-title">Input:</div>
          <div className="calc-body-text">{this.state.inputInter}</div>
        </div>
        <div className="calc-body-item">
          <div className="calc-body-item-title">Result:</div>
          <div className="calc-body-text">{this.state.answer}</div>
        </div>
        <div className="calc-body-item">
          <div className="calc-body-item-title">Only Accept Baic Arithmetic</div>
        </div>
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
    <button className="calc-button" onClick={() => {props.addInput(props.value)}}>{props.value}</button>
  );
}

function peek(array) {
  // console.log(array[array.length-1]);
  // console.log(array.slice(-1)[0]);
  console.log(array.length);
  if (array.length === 1) {
    return array[array.length-1];
  } else {
    return array.slice(-1)[0];
  }
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

function associativity(token) {
  switch (token.value) {
    case '^': {
      return 'right';
    }
    case '*': {
      return 'left';
    }
    case '/': {
      return 'left';
    }
    default: {
      return 'left';
    }
  }
};

function determineOutput(text) {
  // tokens
  console.log(text);
  let tokens = tokenize(text);
  console.log(tokens);
  // parse to RPN
  let queue = parse(tokens);
  console.log(queue);
  // find the answer
  let output = calculate(queue);
  return output;
}

function tokenize(input) {
  let tokens = [];
  let tIndex = -1;
  for (let i = 0; i < input.length; i++) {
    switch (input[i]) {
      case ',': {
        tokens.push({value: ',', type: 'Function Argument Separator'});
        tIndex++;
        break;
      }
      case '-': {
        if (tokens.length > 0 && tokens[tIndex].type !== 'Literal') {
          tokens.push({value: '-', type: 'Literal'});
        } else if (tokens.length === 0) {
          tokens.push({value: '-', type: 'Literal'});
        } else {
          tokens.push({value: '-', type: 'Operator'});
        }
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
      case '[': {
        tokens.push({value: '[', type: 'Left Parenthesis'});
        tIndex++;
        break;
      }
      case ']': {
        tokens.push({value: ']', type: 'Right Parenthesis'});
        tIndex++;
        break;
      }
      case '^': {
        tokens.push({value: '^', type: 'Operator'});
        tIndex++;
        break;
      }
      default: {
        if (tIndex < 0 || tokens[tIndex].type === 'Operator' || tokens[tIndex].type === 'Function Argument Separator' ||
        tokens[tIndex].type === 'Left Parenthesis' || tokens[tIndex].type === 'Right Parenthesis') {
          if (isNaN()) {
            tokens.push({value: input[i], type: 'Literal'});
          } else {
            tokens.push({value: parseInt(input[i]), type: 'Literal'});
          }
          tIndex++;
        } else {
          console.log(input[i]);
          if (isNaN()) {
            tokens[tIndex].value += input[i];
            if (tokens[tIndex].value === 'abs') {
              tokens[tIndex].type = 'Function';
            }
            if (tokens[tIndex].value === 'pow') {
              tokens[tIndex].type = 'Function';
            }
          } else {
            tokens[tIndex].value += parseInt(input[i]);
          }
        }
      }
    }
  }
  return tokens;
}

function parse(tokens) {
  let queue = [];
  let stack = [];
  for (let i = 0; i < tokens.length; i++) {
    console.log(tokens[i]);
    if (tokens[i] !== null) {
      if (tokens[i].type === 'Literal') {
        queue.push(tokens[i]);
      }
      else if(tokens[i].type === "Function") {
        stack.push(tokens[i]);
      }
      else if(tokens[i].type === "Function Argument Separator") {
        //Until the token at the top of the stack is a left parenthesis
        //pop operators off the stack onto the output queue.
        while(peek(stack)
          && peek(stack).type !== "Left Parenthesis") {
          queue.push(stack.pop());
        }
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
        console.log(tokens[i]);
        console.log(stack);
        while ((peek(stack) && (peek(stack).type === "Operator") 
        //o1 is left-associative and its precedence is less than or equal to that of o2, or
        && ((associativity(tokens[i]) === "left" && precedence(tokens[i]) <= precedence(peek(stack)))
          //o1 is right associative, and has precedence less than that of o2,
          || (associativity(tokens[i]) === "right" && precedence(tokens[i]) < precedence(peek(stack))))) ) {
            queue.push(stack.pop());
        }
        console.log(stack);
        stack.pop();
        if (peek(stack) && peek(stack).type === "Function") {
          queue.push(stack.pop());
        }
      }
    }
  }
  while (peek(stack)) {
    queue.push(stack.pop());
  }
  return queue;
}

function calculate(queue) {
  let rpn = queue;
  let index = 0;
  while (rpn.length > 1 && rpn[index]) {
    console.log(rpn[index]);
    let inter = 0;
    if (rpn[index].type === 'Operator' || rpn[index].type === 'Function') {
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
        case '^': {
          console.log(rpn[index-2].value + ' ^ ' + rpn[index-1].value);
          inter = Math.pow(rpn[index-2].value, rpn[index-1].value);
          break;
        }
        case 'abs': {
          console.log(rpn[index-1].value);
          inter = Math.abs(rpn[index-1].value);
          console.log(inter);
          break;
        }
        case 'pow': {
          console.log(rpn[index-1].value);
          inter = Math.pow(rpn[index-2].value, rpn[index-1].value);
          console.log(inter);
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
  return rpn[0].value;
}

export default Calculator;

{/* <div>
        <Row c1="(" c2=")" c3="%" c4="AC" addInput={this.handleChange}/>
        <Row c1="7" c2="8" c3="9" c4="/" addInput={this.handleChange}/>
        <Row c1="4" c2="5" c3="6" c4="*" addInput={this.handleChange}/>
        <Row c1="1" c2="2" c3="3" c4="-" addInput={this.handleChange}/>
        <Row c1="0" c2="." c3="=" c4="+" addInput={this.handleChange}/>
      </div> */}