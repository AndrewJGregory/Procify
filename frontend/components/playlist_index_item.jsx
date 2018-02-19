import React from "react";
import { Link } from "react-router-dom";

class PlaylistIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    if (this.props.isAddSongFormDisplayed) {
      this.props
        .addSongToPlaylist(
          this.props.currentUserId,
          this.props.selectedSongId,
          this.props.playlist.id
        )
        .then(() => {
          this.props.swapAddSongFormShow();
          this.props.toggleSuccessMsg();
        });
    } else {
      this.props.history.push(
        `/user/${this.props.currentUserId}/playlists/${this.props.playlist.id}`
      );
    }
  }

  render() {
    return (
      <li className="square-item" onClick={this.handleClick}>
        <div className="music-note-container">
          <i className="fa fa-music fa-5x" aria-hidden="true" />
        </div>
        <div className="playlist-title" />
        <a>{this.props.playlist.title}</a>
      </li>
    );
  }
}
export default PlaylistIndexItem;
