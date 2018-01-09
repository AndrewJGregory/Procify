import React from 'react';
import AddSongFormContainer from './add_song_form_container';
import DropdownMenuContainer from './dropdown_menu_container';

class SongIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.displayForm = this.displayForm.bind(this);
    this.handleDeleteClick = this.handleDeleteClick.bind(this);
    this.selectPlayingSong = this.selectPlayingSong.bind(this);
    this.displayDropdownMenu = this.displayDropdownMenu.bind(this);
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

  displayDropdownMenu(e) {
    const xPos = e.clientX;
    const yPos = e.clientY;
    if (this.props.isDropdownMenuDisplayed) {
      debugger;
      this.props.setDropdownMenuCoords(xPos, yPos);
    } else {
      this.props.setDropdownMenuCoords(xPos, yPos);
      this.props.toggleDropdownMenu();
    }
  }

  render() {
    let deleteButton = null;
    if (this.props.shouldHaveDeleteButton) {
      deleteButton =
      <button onClick={this.handleDeleteClick}>Delete from playlist</button>;
      }

      const menuPos = {
        top: this.props.yPos,
        left: this.props.xPos
      };

      let menu = null;
      if (this.props.isDropdownMenuDisplayed) {
        menu = <DropdownMenuContainer menuPos={menuPos} />;
      }

      return (
        <div className='song-item-container'>
          <li className='song-item'>
            {this.props.song.title}
            <button
              onClick={this.displayDropdownMenu}>Three dots</button>
            {menu}
          </li>
        </div>
      );
    }
  }

  export default SongIndexItem;
