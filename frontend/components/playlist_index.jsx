import React from 'react';
import { Link } from 'react-router-dom';

const PlaylistIndex = (props) => {
  const playlists = props.playlists.map(playlist => {
    return <li key={playlist.id}>
      <Link to={`/user/${props.currentUserId}/playlists/${playlist.id}`}>{playlist.title}</Link>
    </li>;
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
