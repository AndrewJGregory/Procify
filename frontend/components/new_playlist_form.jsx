import React from 'react';
import { withRouter } from 'react-router-dom';

class NewPlaylistForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { title: '', userId: this.props.currentUserId };
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
    this.props.createNewPlaylist(this.state).then(playlist => {
      this.props.swapPlaylistFormShow();
      const playlistId = Object.keys(playlist)[0];

      this.props.history.push(`/user/${this.props.currentUserId}/playlists/${playlistId}`);
    });
  }

  render() {
    return (
      <main className='transparent-form-page'>
        <section className='transparent-form-content'>
          <div
            className='x-mark'
            onClick={() => this.props.swapPlaylistFormShow()}>
          </div>
          <header className='transparent-form-header'>
            Create new playlist
          </header>
          <input
            value={this.state.playlistTitle}
            onChange={this.updateInput('title')}
            placeholder="Start typing..."
            className='playlist-input'
            autoFocus='true' />
          <div className='playlist-form-btns'>
            <button
              className='playlist-form-btn cancel-form-btn'
              onClick={() => this.props.swapPlaylistFormShow()}>
              cancel
            </button>
            <button
              onClick={this.createNewPlaylist}
              className='playlist-form-btn'>
              create
            </button>
          </div>
        </section>
      </main>
    );
  }
}

export default withRouter(NewPlaylistForm);
