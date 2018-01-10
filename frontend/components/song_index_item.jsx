import React from 'react';
import AddSongFormContainer from './add_song_form_container';
import DropdownMenu from './dropdown_menu';

class SongIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.selectPlayingSong = this.selectPlayingSong.bind(this);
    this.displayDropdownMenu = this.displayDropdownMenu.bind(this);
  }

  selectPlayingSong() {
    this.props.selectPlayingSong(this.props.song);
  }

  displayDropdownMenu(e) {
    const xPos = e.clientX;
    const yPos = e.clientY;
    if (this.props.isDropdownMenuDisplayed) {
      this.props.setDropdownMenuCoords(xPos, yPos);
      this.props.selectSongId(this.props.song.id);
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
        menu = <DropdownMenu
           toggleDropdownMenu={this.props.toggleDropdownMenu}
           typeId={this.props.match.params.typeId}
           swapAddSongFormShow={this.props.swapAddSongFormShow}
           menuPos={menuPos}
           song={this.props.song}
           shouldHaveDeleteOption={Boolean(this.props.match.params.typeId)}
           deleteSongFromPlaylist={this.props.deleteSongFromPlaylist} />;
      }

      return (
        <div className='song-item-container'>
          <div className='song-item-content'>
            <li className='song-item'>
              {this.props.song.title}
            </li>
          </div>
          <div className='menu-content'>
            <button
              className='three-dots'
              onClick={this.displayDropdownMenu}>Three dots</button>
            {menu}
            <button onClick={this.selectPlayingSong}>Play</button>
          </div>
        </div>
      );
    }
  }

  export default SongIndexItem;
