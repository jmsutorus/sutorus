import React, { Component } from 'react';
import '../FindPI/FindPI.css';

class TileCost extends Component {

  constructor(props) {
    super(props);
    this.state = {
        width: '',
        depth: '',
        cost: '',
        area: '',
        totalCost: 0,
        numTiles: 0,
        error: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const value = event.target.value;
    this.setState({[event.target.name]: value});
  }

  calculateCost() {
    const tileArea = this.state.width * this.state.depth;
    const numTiles = Math.ceil(this.state.area/tileArea);
    this.setState({numTiles: numTiles});
    const cost = (numTiles*this.state.cost).toFixed(2);
    this.setState({totalCost: cost});
  }

  handleSubmit(event) {
    if (this.state.width === '' || this.state.depth === '' || this.state.cost === '' || this.state.area === '') {
      this.setState({error: 'Must enter a value'});
    } else {
      if (!isNaN(this.state.width) || !isNaN(this.state.depth) || !isNaN(this.state.cost) || !isNaN(this.state.area)) {
        this.setState({error: ''});
        this.calculateCost();
      } else {
        this.setState({error: 'Must be a number'});
      }
    }
  }

  render() {
    return (
    <div className="module">
      <div className="title">Tile Cover Room</div>
      <div className="body">
        <div className="input-wrapper">
            <div className="input-title">Tile Width (ft)</div>
            <input className="input" type="text" name="width" value={this.state.width} onChange={this.handleChange}/>
            <div className="input-title">Tile Depth (ft)</div>
            <input className="input" type="text" name="depth" value={this.state.depth} onChange={this.handleChange}/>
            <div className="input-title">Tile Cost</div>
            <input className="input" type="text" name="cost" value={this.state.cost} onChange={this.handleChange}/>
            <div className="input-title">Room Area (ft^2)</div>
            <input className="input" type="text" name="area" value={this.state.area} onChange={this.handleChange}/>
        </div>
        <div className="error">{this.state.error}</div>
        <button className="button" type="submit" onClick={this.handleSubmit}>
          <div className="text">Calculate</div>
        </button>
      </div>
      <div className="answer">Total Cost:  {this.state.totalCost}</div>
      <div className="answer">Tile Number: {this.state.numTiles}</div>
    </div>
    );
  }
}

export default TileCost;