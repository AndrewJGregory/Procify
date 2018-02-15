import React from 'react';
import PlaylistIndexItemContainer from './playlist_index_item_container';
import NewPlaylistFormBtnContainer from './new_playlist_form_btn_container';

const PlaylistIndex = ({ playlists, shouldBtnBeDisplayed }) => {
  let playlistItems = playlists.map(playlist => {
    return <PlaylistIndexItemContainer
      key={playlist.id}
      playlist={playlist}
      />;
  });

  if (playlists.length === 0 && shouldBtnBeDisplayed) {
    playlistItems = <li>
      <h3 className='gray-text'>
        Looks like you don't have any playlists! Create a
        <NewPlaylistFormBtnContainer />
        or check out the songs.
      </h3>
    </li>;
  }
  return (
    <section className='square-index-content'>
      <ul>
        {playlistItems}
      </ul>
    </section>
  );
};

export default PlaylistIndex;
