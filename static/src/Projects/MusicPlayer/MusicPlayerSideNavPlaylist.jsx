import React from "react";

function MusicPlayerSideNavPlaylist({ path, name }) {
  return (
    <div className="playlists-scroll-wrapper">
      <li className="playlists-scroll-item">
        <div className="playlists-scroll-link-container">
          <a className="playlists-scroll-link" href={path}>
            {name}
          </a>
        </div>
      </li>
    </div>
  );
}

export default MusicPlayerSideNavPlaylist;
