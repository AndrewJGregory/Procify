import React from 'react';

class NewPlaylistForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.swapPlaylistFormShow();
  }

  render() {
    return (
      <main className='playlist-form-page'>
        <section className='playlist-form-content'>
          <h1 className='x-mark' onClick={this.handleClick}>✕</h1>
          <header className='playlist-form-header'>
            Create new playlist
          </header>
          <input
            placeholder="Start typing..."></input>
          <section className='playlist-form-btns'>
            <button className='playlist-form-btn' onClick={this.handleClick}>
              cancel
            </button>
            <button className='session-link playlist-form-btn'>
              create
            </button>
          </section>
        </section>
      </main>
    );
  }
}
export default NewPlaylistForm;
