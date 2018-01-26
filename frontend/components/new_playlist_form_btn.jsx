import React from 'react';
import NewPlaylistFormContainer from './new_playlist_form_container';

class NewPlaylistFormBtn extends React.Component {
  constructor(props) {
    super(props);
    this.displayForm = this.displayForm.bind(this);
  }

  displayForm() {
    this.props.swapPlaylistFormShow();
  }

  render() {
    const form = (
      this.props.isPlaylistFormDisplayed ? <NewPlaylistFormContainer /> : null
    );

    return (
      <div className='new-playlist-btn-container'>
        {form}
        <button className='session-link new-playlist-link'
          onClick={this.displayForm}>
          new playlist
        </button>
      </div>
    );
  }
}

export default NewPlaylistFormBtn;
