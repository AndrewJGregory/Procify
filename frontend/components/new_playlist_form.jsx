import React from 'react';

class NewPlaylistForm extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <main className='playlist-form-page'>
        <section className='playlist-form-content'>
          <h1 className='x-mark'>✕</h1>
          <header className='playlist-form-header'>
            Create new playlist
          </header>
          <input
            placeholder="Start typing..."></input>
          <section className='playlist-form-btns'>
            <button className='playlist-form-btn'>
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
