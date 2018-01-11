import React from 'react';
import SongIndex from './song_index';
import AlbumIndex from './album_index';

const ArtistShow = (props) => {
  return (
    <section className='artist-show'>
      <SongIndex songs={props.storeSongs} />
      <AlbumIndex albums={props.storeAlbums} />
    </section>
  );
};

export default ArtistShow;
