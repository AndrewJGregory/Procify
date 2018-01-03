import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <section className='nav-bar'>
      <ul id="nav-bar-ul">
        <Link to='/collection/playlists'><li>Playlists</li></Link>
        <Link to='/collection/tracks'><li>Songs</li></Link>
        <Link to='/collection/albums'><li>Albums</li></Link>
        <Link to='/collection/artists'><li>Artists</li></Link>
      </ul>
    </section>
  );
};

export default NavBar;
