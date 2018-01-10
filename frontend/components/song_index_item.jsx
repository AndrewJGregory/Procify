import React from 'react';
import AddSongFormContainer from './add_song_form_container';
import DropdownMenu from './dropdown_menu';

class SongIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.displayDropdownMenu = this.displayDropdownMenu.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.play = this.play.bind(this);
    this.pause = this.pause.bind(this);
    this.hoverOverSong = this.hoverOverSong.bind(this);
    this.leaveSong = this.leaveSong.bind(this);
  }

  play() {
    this.props.selectPlayingSong(this.props.song);
  }

  pause() {
    this.props.audio.pause();
    window.clearInterval(this.props.intervalId);
    this.props.toggleSongPlaying();
  }

  handleClick(e) {
    e.preventDefault();
    if (this.props.isSongPlaying) {
      this.pause();
    } else {
      this.play();
    }
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

  hoverOverSong() {
    this.props.selectHoveredSongId(this.props.song.id);
  }

  leaveSong() {
    this.props.selectHoveredSongId(-1);
  }

  render() {
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
    let activeClass = '';
    let threeDots = '';
    let numOrPlayBtn = this.props.listNum + '.';
    if (this.props.selectedSongId === this.props.song.id) {
      activeClass = 'hovered-song';
      threeDots = <button
        className='three-dots'
        onClick={this.displayDropdownMenu}>Three dots</button>;
        if (this.props.song.id === this.props.playingSongId) {
          numOrPlayBtn = <i className="fa fa-pause-circle-o playing-song-btn" aria-hidden="true"
            onClick={this.handleClick}></i>;
          } else {
            numOrPlayBtn = <i className="fa fa-play" aria-hidden="true"
              onClick={this.handleClick}></i>;
          }
        }

        return (
          <div className={`song-item-container ${activeClass}`}
            onMouseEnter={this.hoverOverSong}
            onMouseLeave={this.leaveSong}>
            <div className='song-item-content'>
              <li className='song-item'>
                {numOrPlayBtn}
                {this.props.song.title}
              </li>
            </div>
            <div className='menu-content'>
              {threeDots}
              {menu}
            </div>
          </div>
        );
      }
    }

    export default SongIndexItem;
