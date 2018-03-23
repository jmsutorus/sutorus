import React from "react";
import flowerBoy from "./flowerBoy.png";

import "./RecordPlayer.css";
import "./RecordPlayerTrue.css";

export default class RecordPlayer extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
          active: false,
      };
  }
  toggleClass() {
      const currentState = this.state.active;
      this.setState({ active: !currentState });
      console.log(this.state.active);
  };
  backClick() {
    this.toggleClass;
  };
  playClick() {
    this.toggleClass;
  };
  forwardClick() {
    this.toggleClass;
  };
  render() {
      return (
          <div className={"record-player-"+this.state.active}>
            <div class={"song-container-"+this.state.active}>
              <div class={"artist-title-"+this.state.active}></div>
              <div class={"song-title-"+this.state.active}></div>
              <div class={"prgoress-bar-"+this.state.active}></div>
            </div>
            <div class={"button-container-"+this.state.active}>
              <div class={"back-button-"+this.state.active} onClick={() => {this.playClick()}}>
                <i class="fas fa-backward fa-3x"></i>
              </div>
              <div class={"play-button-"+this.state.active} onClick={() => {this.toggleClass()}} >
                <i class="fas fa-play fa-3x"></i>
              </div>
              <div class={"pause-button-"+this.state.active} onClick={() => {this.toggleClass()}}>
                <i class="fas fa-pause fa-3x"></i>
              </div>
              <div class={"forward-button-"+this.state.active} onClick={() => {this.playClick()}}>
                <i class="fas fa-forward fa-3x"></i>
              </div>
            </div>
            <div class={"image-container-"+this.state.active}>
              <img class={"image-"+this.state.active} src={flowerBoy} alt="Flower Boy Album Cover" width="120" height="120" />
              <div class={"circle-"+this.state.active}></div>
            </div>
          </div>
      )
    };
}
