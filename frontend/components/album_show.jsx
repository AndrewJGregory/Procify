import React from 'react';
import SongIndex from './song_index';

const AlbumShow = (props) => {
  return (
    <SongIndex songs={props.songs} />
  );
};

export default AlbumShow;
