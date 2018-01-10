import React from 'react';
import SongIndexItemContainer from './song_index_item_container';
import shortid from 'shortid';

const SongIndex = (props) => {
  let num = 0;
  const songs = props.songs.map(song => {
    num += 1;
    return <SongIndexItemContainer
      key={shortid.generate()}
      song={song}
      listNum={num}/>;
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
