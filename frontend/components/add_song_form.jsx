import React from "react";
import PlaylistIndex from "./playlist_index";

class AddSongForm extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchCurrentUsersPlaylists(this.props.currentUserId);
    this.props.toggleDropdownMenu();
  }

  render() {
    return (
      <main className="transparent-form-page">
        <section className="transparent-form-content">
          <h1
            className="x-mark"
            onClick={() => this.props.swapAddSongFormShow()}
          />
          <header className="transparent-form-header" />
          <PlaylistIndex
            playlists={this.props.playlists}
            currentUserId={this.props.currentUserId}
          />
        </section>
      </main>
    );
  }
}

export default AddSongForm;
