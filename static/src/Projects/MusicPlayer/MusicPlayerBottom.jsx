import React from "react";
import JoeAndSam from "../../JoeAndSam.JPG";

function MusicPlayerBottom() {
  return (
    <div className="player-bottom">
      <footer className="now-playing-bar-container">
        <div className="now-playing-bar">
          <div className="now-playing-bar-left">
            <div className="now-playing">
              <div className="now-playing-cover">
                <img
                  className="now-playing-cover-img"
                  alt="Joseph User Image"
                  src="https://i.scdn.co/image/ab67616d00001e02290bb9e9b283adb76c6438fb"
                />
              </div>
              <div className="now-playing-artist">
                <a className="now-playing-song" href="/">
                  1049 Gotho
                </a>
                <a className="now-playing-artist-song" href="/">
                  Idles
                </a>
              </div>
              <div className="control-button-wrapper">
                <button className="control-button">
                  <i class="fas fa-heart fa-lg" />
                </button>
              </div>
            </div>
          </div>
          <div className="now-playing-bar-center">
            <div className="player-controls">
              <div className="player-controls-buttons">
                <div className="control-button-wrapper">
                  <button className="control-button control-button-disabled">
                    <i class="fas fa-random fa-lg" />
                  </button>
                </div>
                <div className="control-button-wrapper">
                  <button className="control-button">
                    <i class="fas fa-backward fa-lg" />
                  </button>
                </div>
                <div className="control-button-wrapper">
                  <button className="control-button control-button-circle">
                    <i class="fas fa-play fa-lg" />
                  </button>
                </div>
                <div className="control-button-wrapper">
                  <button className="control-button">
                    <i class="fas fa-forward fa-lg" />
                  </button>
                </div>
                <div className="control-button-wrapper">
                  <button className="control-button">
                    <i class="fas fa-redo fa-lg" />
                  </button>
                </div>
              </div>
              <div className="playback-bar">
                <div className="playback-progress-time ">1:00</div>
                <div className="progress-bar">
                  <div className="progress-bar-middle-align">
                    <div className="progress-bar-fg-wrapper">
                      <div className="progress-bar-fg" />
                    </div>
                    <button className="progress-bar-middle-align-change" />
                  </div>
                </div>
                <div className="playback-progress-time ">1:00</div>
              </div>
            </div>
          </div>
          <div className="now-playing-bar-right">
            <div className="now-playing-bar-right-inner ">
              <div className="extra-controls">
                <div className="control-button-wrapper">
                  <button className="control-button">
                    <i class="fas fa-list fa-lg" />
                  </button>
                </div>
                <div className="control-button-wrapper">
                  <button className="control-button">
                    <i class="fas fa-volume-up fa-lg" />
                  </button>
                </div>
                <div className="volume-bar">
                  <div className="progress-bar">
                    <div className="progress-bar-middle-align">
                      <div className="progress-bar-fg-wrapper">
                        <div className="progress-bar-fg" />
                      </div>
                      <button className="progress-bar-middle-align-change" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default MusicPlayerBottom;
