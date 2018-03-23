import React from "react";
import RecordPlayer from "./RecordPlayer.js";

import "./Animations.css";

export default class Animations extends React.Component {

  render() {
    return (
      <div>
        <RecordPlayer />
        <div class="record-player">
        </div>
        <div class="loader">
          <div class="logo">
            <div class="white"></div>
            <div class="orange"></div>
            <div class="red"></div>
          </div>
        </div>
      </div>
    );
  }
}
