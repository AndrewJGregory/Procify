import React from 'react';
import AddSongFormContainer from './add_song_form_container';

class SongIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.displayForm = this.displayForm.bind(this);
    this.handleDeleteClick = this.handleDeleteClick.bind(this);
  }

  displayForm() {
    this.props.swapAddSongFormShow();
    this.props.selectSongId(this.props.song.id);
  }

  handleDeleteClick() {
    this.props.deleteSongFromPlaylist(
      this.props.song.id,
      this.props.match.params.typeId
    );
  }

  render() {
    return (
      <div className='song-item-container'>
        <li className='song-item'>
          {this.props.song.title}
          <button onClick={this.displayForm}>Add to playlist</button>
          <button onClick={this.handleDeleteClick}>Delete from playlist</button>
        </li>
      </div>
    );
  }
}

export default SongIndexItem;
