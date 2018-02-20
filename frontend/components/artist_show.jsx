import React from "react";
import SongIndexContainer from "./song_index_container";
import AlbumIndexContainer from "./album_index_container";

const ArtistShow = props => {
  return (
    <section className="artist-show">
      <div className="artist-show-content">
        <h1 className="artist-text">Songs</h1>
        <SongIndexContainer songs={props.storeSongs} />
        <h1 className="artist-text">Albums</h1>
        <AlbumIndexContainer albums={props.storeAlbums} />
      </div>
    </section>
  );
};

export default ArtistShow;
