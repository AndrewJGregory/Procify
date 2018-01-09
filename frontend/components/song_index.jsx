import React from 'react';
import SongIndexItemContainer from './song_index_item_container';
import shortid from 'shortid';

const SongIndex = (props) => {
  const songs = props.songs.map(song => {
    return <SongIndexItemContainer
      key={shortid.generate()}
      song={song} />;
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
