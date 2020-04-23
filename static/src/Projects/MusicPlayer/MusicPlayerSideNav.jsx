import React from "react";
import MusicPlayerSideNavPlaylist from "./MusicPlayerSideNavPlaylist";

var userPlaylists = [
  { path: "/", name: "Your Top Playlists 2019" },
  { path: "/", name: "Post Punk" },
  { path: "/", name: "KKB" },
  { path: "/", name: "Marvin's Room" },
  { path: "/", name: "X and Peep" },
  { path: "/", name: "Rockish" },
  { path: "/", name: "Run" },
  { path: "/", name: "british" },
  { path: "/", name: "Foreign" },
  { path: "/", name: "Discover Weekly" },
  { path: "/", name: "Road" },
  { path: "/", name: "weird" },
  { path: "/", name: "mac??" },
];

function getUserPlaylists() {
  var userPlaylistsList = [];
  userPlaylists.forEach((list) => {
    userPlaylistsList.push(
      <MusicPlayerSideNavPlaylist path={list.path} name={list.name} />
    );
  });
  return userPlaylistsList;
}

function MusicPlayerSideNav() {
  return (
    <div className="player-side-nav">
      <nav className="player-navBar" aria-label="Main" role="navigation">
        <div className="player-navBar-header">hi</div>
        <ul className="player-navBar-entry">
          <li>
            <div className="player-navBar-item">
              <a
                className="player-navBar-link player-navBar-link-active"
                href="/"
                aria-label="Home"
              >
                <div className="player-navBar-link-wrapper">
                  <div className="player-navBar-item-icon">
                    <i class="fas fa-home fa-lg" />
                  </div>
                  <div className="player-navBar-item-text">Home</div>
                </div>
              </a>
            </div>
          </li>
          <li>
            <div className="player-navBar-item">
              <a className="player-navBar-link" href="/" aria-label="Home">
                <div className="player-navBar-link-wrapper">
                  <div className="player-navBar-item-icon">
                    <i class="fas fa-search fa-lg" />
                  </div>
                  <div className="player-navBar-item-text">Search</div>
                </div>
              </a>
            </div>
          </li>
          <li>
            <div className="player-navBar-item">
              <a className="player-navBar-link" href="/" aria-label="Home">
                <div className="player-navBar-link-wrapper">
                  <div className="player-navBar-item-icon">
                    <i class="fas fa-book fa-lg" />
                  </div>
                  <div className="player-navBar-item-text">Library</div>
                </div>
              </a>
            </div>
          </li>
        </ul>
        <div className="player-navBar-rootList">
          <div className="rootList-content">
            <div className="rootList-playlists">
              <h2 className="rootList-playlists-header">Playlists</h2>
              <div className="rootList-playlist">
                <button className="rootList-playlist-button">
                  <div className="rootList-playlist-button-image" />
                  <div className="rootList-playList-button-text">
                    Create Playlist
                  </div>
                </button>
              </div>
              <hr className="rootList-divider" />
              <ul className="rootList-playlists-scroll">
                {getUserPlaylists()}
              </ul>
            </div>
          </div>
        </div>
        <div className="player-navBar-footer">
          <div className="player-navBar-item">
            <a className="player-navBar-link" href="/" aria-label="Home">
              <div className="player-navBar-link-wrapper">
                <div className="player-navBar-item-icon">
                  <i class="fas fa-download fa-lg" />
                </div>
                <div className="player-navBar-item-text">Install App</div>
              </div>
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default MusicPlayerSideNav;
