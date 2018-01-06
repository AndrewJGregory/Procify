import React from 'react';
import { withRouter } from 'react-router-dom';

class NewPlaylistForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { title: '' };
    this.updateInput = this.updateInput.bind(this);
    this.createNewPlaylist = this.createNewPlaylist.bind(this);
  }

  updateInput(type) {
    return e => {
      this.setState({[type]: e.target.value});
    };
  }

  createNewPlaylist(e) {
    e.preventDefault();
    this.props.createNewPlaylist({playlist: this.state}).then(playlist => {
      this.props.swapPlaylistFormShow();
      const playlistId = Object.keys(playlist);
      this.props.history.push(`/user/${this.props.currentUserId}/playlists/${playlistId}`);
    });
  }

  render() {
    return (
      <main className='playlist-form-page'>
        <section className='playlist-form-content'>
          <h1
            className='x-mark'
            onClick={() => this.props.swapPlaylistFormShow()}>
            ✕
          </h1>
          <header className='playlist-form-header'>
            Create new playlist
          </header>
          <input
            value={this.state.playlistTitle}
            onChange={this.updateInput('title')}
            placeholder="Start typing..."></input>
          <section className='playlist-form-btns'>
            <button
              className='playlist-form-btn'
              onClick={() => this.props.swapPlaylistFormShow()}>
              cancel
            </button>
            <button
              onClick={this.createNewPlaylist}
              className='session-link playlist-form-btn'>
              create
            </button>
          </section>
        </section>
      </main>
    );
  }
}

export default withRouter(NewPlaylistForm);
