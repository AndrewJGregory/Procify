import React from 'react';
import AddSongFormContainer from './add_song_form_container';

class SongIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.displayForm = this.displayForm.bind(this);
    this.handleDeleteClick = this.handleDeleteClick.bind(this);
    this.selectPlayingSong = this.selectPlayingSong.bind(this);
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

  selectPlayingSong() {
    this.props.selectPlayingSong(this.props.song);
  }

  render() {
    let deleteButton = null;
    if (this.props.shouldHaveDeleteButton) {
      deleteButton =
      <button onClick={this.handleDeleteClick}>Delete from playlist</button>;
    }
    return (
      <div className='song-item-container'>
        <li className='song-item'>
          {this.props.song.title}
          <button onClick={this.displayForm}>Add to playlist</button>
          {deleteButton}
          <button onClick={this.selectPlayingSong}>Play</button>
        </li>
      </div>
    );
  }
}

export default SongIndexItem;
