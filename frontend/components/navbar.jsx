import React from 'react';
import { Link } from 'react-router-dom';
import {NewPlaylistFormContainer} from './playlist_form_container';

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
          <Link to='/collection/playlists'><li>Playlists</li></Link>
          <Link to='/collection/tracks'><li>Songs</li></Link>
          <Link to='/collection/albums'><li>Albums</li></Link>
          <Link to='/collection/artists'><li>Artists</li></Link>
        </ul>
        <button className='session-link new-playlist-link'
          onClick={this.displayForm}>
        new playlist
        </button>
      </section>
    );
  }
}

export default NavBar;
