import React from 'react';
import PlaylistIndexItemContainer from './playlist_index_item_container';

const PlaylistIndex = (props) => {
  const playlists = props.playlists.map(playlist => {
    return <PlaylistIndexItemContainer
      key={playlist.id}
      playlist={playlist}
      />;
  });

  return (
    <section className='playlist-index'>
      <ul className='playlist-list'>
        {playlists}
      </ul>
    </section>
  );
};

export default PlaylistIndex;
