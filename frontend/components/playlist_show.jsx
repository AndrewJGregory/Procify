import React from 'react';
import SongIndex from './song_index';

const PlaylistShow = ({ songs, playlistId }) => {
  return (
    <section className='playlist-show'>
      <SongIndex songs={songs} />
    </section>
  );
};
export default PlaylistShow;
