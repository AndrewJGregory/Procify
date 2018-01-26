import React from 'react';
import { withRouter } from 'react-router-dom';
import * as navbarUtil from '../util/navbar_util.jsx';
import shortid from 'shortid';
import NewPlaylistFormBtnContainer from './new_playlist_form_btn_container';

const NavBar = (props) => {
  const type = props.type;
  const lis = ['playlists', 'tracks', 'albums', 'artists'].map(navbarWord => (
    navbarUtil.generateLi(type, navbarWord, shortid.generate())
  ));

  return (
    <section className='nav-bar'>
        <div className='nav-bar-ul-container'>
          <div className='new-playlist-btn-container'>
          <NewPlaylistFormBtnContainer />
        </div>
        <ul id="nav-bar-ul">
          {lis}
        </ul>
      </div>
    </section>
  );
};

export default NavBar;
