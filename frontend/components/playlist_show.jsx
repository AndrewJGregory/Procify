import React from 'react';
import SongIndex from './song_index';

const PlaylistShow = (props) => {
  return (
    <section className='playlist-show'>
      <SongIndex songs={props.songs} />
    </section>
  );
};
export default PlaylistShow;
