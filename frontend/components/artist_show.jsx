import React from "react";
import SongIndex from "./song_index";
import AlbumIndex from "./album_index";

const ArtistShow = props => {
  return (
    <section className="artist-show">
      <div className="artist-show-content">
        <h1 className="artist-text">Songs</h1>
        <SongIndex songs={props.storeSongs} />
        <h1 className="artist-text">Albums</h1>
        <AlbumIndex albums={props.storeAlbums} />
      </div>
    </section>
  );
};

export default ArtistShow;
