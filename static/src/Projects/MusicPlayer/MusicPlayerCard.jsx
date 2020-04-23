import React from "react";

function MusicPlayerCard({ src, title, name }) {
  return (
    <div className="player-card-wrapper">
      <div className="player-card">
        <div className="player-card-artist">
          <img className="player-card-img" alt="Joseph User Image" src={src} />
        </div>
        <div className="player-card-artist-wrapper">
          <div className="player-card-name">
            <a href="/" className="player-card-link">
              {title}
            </a>
          </div>
          <div className="player-card-description">
            <a href="/" className="player-card-link">
              {name}
            </a>
          </div>
        </div>
        <div className="player-card-button-wrapper">
          <button className="player-card-button" aria-label="play">
            <i class="fas fa-play" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default MusicPlayerCard;
