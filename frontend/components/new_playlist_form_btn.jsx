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
    return (
      <button className='session-link new-playlist-link'
        onClick={this.displayForm}>
        new playlist
      </button>
    );
  }
}

export default NewPlaylistFormBtn;
