import React from 'react';

const SongIndexItem = ({ song }) => (
  <li className='song-item'>
    <div className='song-item-container'>
      {song.title}
    </div>
  </li>
);
export default SongIndexItem;
