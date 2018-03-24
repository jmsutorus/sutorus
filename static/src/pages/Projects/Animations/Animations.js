import React from "react";
import RecordPlayer from "./RecordPlayer/RecordPlayer.js";
import SearchBox from "./SearchBar/SearchBox.js";
import SaveButton from "./SaveButton.js";

import "./Animations.css";

export default class Animations extends React.Component {

  render() {
    return (
      <div>
        <RecordPlayer />
        <SearchBox />
        <SaveButton width="150px" height="50px" text="Save"/>
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
