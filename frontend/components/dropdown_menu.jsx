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
  }

  handleDeleteClick() {
    this.props.deleteSongFromPlaylist(
      this.props.song.id,
      this.props.typeId
    ).then(() => this.props.toggleDropdownMenu());
  }

  render() {
    let deleteLi = null;
    if (this.props.shouldHaveDeleteOption) {
      deleteLi = <li onClick={this.handleDeleteClick}>Delete from playlist</li>;
    }
    return (
      <ul
        className='dropdown-menu'
        style={this.props.menuPos}>
        <li onClick={this.displayForm}>Add to playlist</li>
        {deleteLi}
      </ul>
    );
  }
}

export default enhanceWithClickOutside(DropdownMenu);
