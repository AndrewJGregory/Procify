import React from "react";
import SongIndexContainer from "./song_index_container";
import AlbumIndexItemContainer from "./album_index_item_container";

const AlbumShow = props => {
  let album = null;
  if (props.album) {
    album = <AlbumIndexItemContainer album={props.album} />;
  }

  return (
    <section className="album-show-page">
      <div className="album-show-content">
        <aside className="album-show-info">{album}</aside>
        <div className="album-song-index">
          <SongIndexContainer songs={props.songs} />
        </div>
      </div>
    </section>
  );
};

export default AlbumShow;
