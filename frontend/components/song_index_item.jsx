import React from 'react';
import AddSongFormContainer from './add_song_form_container';
import DropdownMenu from './dropdown_menu';
import { Link } from 'react-router-dom';

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
    if (this.props.isDropdownMenuDisplayed && this.props.song.id === this.props.selectedSongId) {
      menu = <DropdownMenu
        toggleDropdownMenu={this.props.toggleDropdownMenu}
        typeId={this.props.match.params.typeId}
        swapAddSongFormShow={this.props.swapAddSongFormShow}
        menuPos={menuPos}
        song={this.props.song}
        shouldHaveDeleteOption={Boolean(this.props.match.params.typeId)}
        deleteSongFromPlaylist={this.props.deleteSongFromPlaylist}
        selectSongId={this.props.selectSongId} />;
    }
    let activeClass = '';
    let threeDots = '';
    const playBtn =  <i
      className="fa fa-play"
      aria-hidden="true"
      onClick={this.handleClick}></i>;

      const pauseBtn = <i
        className="fa fa-pause-circle-o" aria-hidden="true"
        onClick={this.handleClick}></i>;

        let numOrPlayBtn = this.props.listNum + '.';

        if (this.props.selectedSongId === this.props.song.id) {
          activeClass = 'hovered-song';
          threeDots = <div
            onClick={this.displayDropdownMenu}
            className='three-dots'>
            <i className="fa fa-circle" aria-hidden="true"></i>
            <i className="fa fa-circle" aria-hidden="true"></i>
            <i className="fa fa-circle" aria-hidden="true"></i>
          </div>;
          if (this.props.song.id === this.props.playingSongId) {
            if (this.props.isSongPlaying) {
              numOrPlayBtn = pauseBtn;
            } else {
              numOrPlayBtn = playBtn;
            }
          } else {
            numOrPlayBtn = playBtn;
          }
        }


        return (
          <div className={`song-item-container ${activeClass}`}
            onMouseEnter={this.hoverOverSong}
            onMouseLeave={this.leaveSong}>
            <div className='song-item-content'>
              <div className='song-item'>
                <div className='song-btn-container'>
                  {numOrPlayBtn}
                </div>
                <div className='song-item-info'>

                  {this.props.song.title}
                  <Link to={`/collection/artists/${this.props.song.artist_id}`}>
                    {this.props.artist.name}
                  </Link>
                </div>
              </div>
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
