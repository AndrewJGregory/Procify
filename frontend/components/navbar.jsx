import React from 'react';
import { withRouter } from 'react-router-dom';
import { NewPlaylistFormContainer } from './playlist_form_container';
import * as navbarUtil from '../util/navbar_util.jsx';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.displayForm = this.displayForm.bind(this);
  }

  displayForm() {
    this.props.swapPlaylistFormShow();
  }

  render() {
    const form = (
      this.props.isPlaylistFormDisplayed ? <NewPlaylistFormContainer /> : null
    );

    const type = this.props.type;
    const lis = ['playlists', 'tracks', 'albums', 'artists'].map(navbarWord => (
      navbarUtil.generateLi(type, navbarWord)
    ));
    
    return (
      <section className='nav-bar'>
        {form}
        <div className='nav-bar-ul-container'>
          <ul id="nav-bar-ul">
            {lis}
          </ul>
        </div>
        <div className='new-playlist-btn-container'>
          <button className='session-link new-playlist-link'
            onClick={this.displayForm}>
            new playlist
          </button>
        </div>
      </section>
    );
  }
}

export default NavBar;
