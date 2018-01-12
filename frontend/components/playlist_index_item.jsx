import React from 'react';
import { Link } from 'react-router-dom';

class PlaylistIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    if (this.props.isAddSongFormDisplayed) {
      this.props.addSongToPlaylist(
        this.props.currentUserId,
        this.props.selectedSongId,
        this.props.playlist.id
      ).then(() => {
        this.props.swapAddSongFormShow();
        this.props.toggleSuccessMsg();
      });
    } else {
      this.props.history.push(`/user/${this.props.currentUserId}/playlists/${this.props.playlist.id}`);
    }
  }

  render() {
    let successMsg = null;

    return (
      <li className='playlist-item'>
        <a onClick={this.handleClick}>{this.props.playlist.title}</a>
      </li>
    );
  }
}
export default PlaylistIndexItem;
