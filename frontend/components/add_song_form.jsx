import React from "react";
import PlaylistIndexContainer from "./playlist_index_container";

class AddSongForm extends React.Component {
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
          <PlaylistIndexContainer />
        </section>
      </main>
    );
  }
}

export default AddSongForm;
