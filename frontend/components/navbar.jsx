import React from 'react';
import { Link } from 'react-router-dom';
import NewPlaylistForm from './new_playlist_form';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showPlaylist: false };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({showPlaylist: !this.state.showPlaylist });
  }

  render() {
    const form = (this.state.showPlaylist ? <NewPlaylistForm /> : null);
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
          onClick={this.handleClick}>
        new playlist
        </button>
      </section>
    );
  }
}

export default NavBar;
