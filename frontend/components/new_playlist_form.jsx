import React from 'react';

class NewPlaylistForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { title: '', user_id: this.props.user_id };
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
    this.props.createNewPlaylist({playlist: this.state});
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

export default NewPlaylistForm;
