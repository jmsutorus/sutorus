import React from "react";

function MusicPlayerTopNav() {
  return (
    <div className="player-top-nav">
      <div className="top-nav-header">
        <div className="nav-buttons-wrapper">
          <button className="nav-button">
            <svg viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M15.54 21.15L5.095 12.23 15.54 3.31l.65.76-9.555 8.16 9.555 8.16"
              />
            </svg>
          </button>
          <button className="nav-button">
            <svg viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M15.54 21.15L5.095 12.23 15.54 3.31l.65.76-9.555 8.16 9.555 8.16"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default MusicPlayerTopNav;
