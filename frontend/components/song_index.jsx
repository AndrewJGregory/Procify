import React from 'react';
import SongIndexItem from './song_index_item';

const SongIndex = (props) => {
  const songs = props.songs.map(song => {
    return <SongIndexItem key={song.id} song={song} />;
  });
  return (
    <section className='song-index'>
      <ul className='song-list'>
        {songs}
      </ul>
    </section>
  );
};

export default SongIndex;
