import React from 'react';
import SongIndex from './song_index';
import AlbumIndex from './album_index';

const ArtistShow = (props) => {
  return (
    <section className='artist-show'>
      <h1>Songs</h1>
      <SongIndex songs={props.storeSongs} />
      <h1>Albums</h1>
      <AlbumIndex albums={props.storeAlbums} />
    </section>
  );
};

export default ArtistShow;
