import React from "react";
import MusicPlayerBody from "./MusicPlayerBody";
import MusicPlayerSideNav from "./MusicPlayerSideNav";
import MusicPlayerBottom from "./MusicPlayerBottom";
import MusicPlayerTopNav from "./MusicPlayerTopNav";
import "./MusicPlayer.scss";
import "./MusicPlayerTopNav.scss";
import "./MusicPlayerBody.scss";

function MusicPlayer() {
  return (
    <div className="player-root">
      <div className="player-grid">
        <MusicPlayerTopNav />
        <MusicPlayerSideNav />
        <MusicPlayerBottom />
        <MusicPlayerBody />
      </div>
    </div>
  );
}

export default MusicPlayer;
