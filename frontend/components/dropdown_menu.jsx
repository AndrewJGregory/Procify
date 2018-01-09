import React from 'react';
import enhanceWithClickOutside from 'react-click-outside';

class DropdownMenu extends React.Component {
  constructor(props) {
    super(props);
    this.displayForm = this.displayForm.bind(this);
    this.handleDeleteClick = this.handleDeleteClick.bind(this);
  }

  handleClickOutside() {
    // this.props.toggleDropdownMenu();
  }

  displayForm() {
    this.props.swapAddSongFormShow();
    this.props.selectSongId(this.props.song.id);
  }

  handleDeleteClick() {
    this.props.deleteSongFromPlaylist(
      this.props.song.id,
      this.props.typeId
    );
  }

  render() {
    return (
      <ul
        className='dropdown-menu'
        style={this.props.menuPos}>
        <li onClick={this.displayForm}>Add to playlist</li>
        <li onClick={this.handleDeleteClick}>Delete from playlist</li>
      </ul>
    );
  }
}

export default enhanceWithClickOutside(DropdownMenu);
