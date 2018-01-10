import React from 'react';
import AddSongFormContainer from './add_song_form_container';
import DropdownMenu from './dropdown_menu';

class SongIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isHovered: false };
    this.displayDropdownMenu = this.displayDropdownMenu.bind(this);
    this.toggleActiveClass = this.toggleActiveClass.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.play = this.play.bind(this);
    this.pause = this.pause.bind(this);
  }

  play() {
    this.props.selectPlayingSong(this.props.song);
  }

  pause() {
    this.props.audio.pause();
    this.props.toggleSongPlaying();
  }

  handleClick(e) {
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

  toggleActiveClass() {
    this.setState({isHovered: !this.state.isHovered});
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
    if (this.state.isHovered) {
      activeClass = 'hovered-song';
      threeDots = <button
        className='three-dots'
        onClick={this.displayDropdownMenu}>Three dots</button>;
        numOrPlayBtn =
        <i className="fa fa-play-circle-o playing-song-btn"
          aria-hidden="true"
          onClick={this.handleClick}></i>;
        }
        return (
          <div className={`song-item-container ${activeClass}`}
            onMouseEnter={this.toggleActiveClass}
            onMouseLeave={this.toggleActiveClass}>
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
