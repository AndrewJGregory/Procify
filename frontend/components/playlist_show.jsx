import React from "react";
import SongIndexContainer from "./song_index_container";

class PlaylistShow extends React.Component {
  constructor(props) {
    super(props);
    this.handleDeleteClick = this.handleDeleteClick.bind(this);
  }

  handleDeleteClick() {
    this.props.deletePlaylist(this.props.playlistId).then(() => {
      this.props.history.push("/collection/playlists");
    });
  }

  render() {
    return (
      <section className="playlist-show">
        <SongIndexContainer songs={this.props.songs} />
        <button
          onClick={this.handleDeleteClick}
          className={`red-btn delete-playlist-btn`}
        >
          Delete playlist
        </button>
      </section>
    );
  }
}

export default PlaylistShow;
