


import React from 'react';
import { Link } from 'react-router-dom';
import { NewPlaylistFormContainer } from './playlist_form_container';

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

    return (
      <section className='nav-bar'>
        {form}
        <ul id="nav-bar-ul">
          <li className='nav-link'>
            <Link to='/collection/playlists'>Playlists</Link>
          </li>
          <li className='nav-link'>
            <Link to='/collection/tracks'>Songs</Link>
          </li>
          <li className='nav-link'>
            <Link to='/collection/albums'>Albums</Link>
          </li>
          <li className='nav-link'>
            <Link to='/collection/artists'>Artists</Link>
          </li>
          <button className='session-link new-playlist-link'
            onClick={this.displayForm}>
            new playlist
          </button>
        </ul>
      </section>
    );
  }
}

export default NavBar;
