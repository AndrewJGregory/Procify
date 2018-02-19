import React from "react";
import AddSongFormContainer from "./add_song_form_container";
import DropdownMenu from "./dropdown_menu";
import { Link } from "react-router-dom";
import * as PlayingSongUtil from "../util/playing_song_util";

class SongIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.displayDropdownMenu = this.displayDropdownMenu.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.hoverOverSong = this.hoverOverSong.bind(this);
    this.leaveSong = this.leaveSong.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    if (this.props.playingSongId !== this.props.song.id) {
      if (this.props.isSongPlaying) {
        this.props.toggleSongPlaying();
        PlayingSongUtil.playNewSong(this.props);
      } else {
        PlayingSongUtil.playNewSong(this.props);
      }
    } else {
      if (this.props.isSongPlaying) {
        PlayingSongUtil.pause(this.props);
      } else {
        PlayingSongUtil.rePlay(this.props);
      }
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
    if (
      this.props.isDropdownMenuDisplayed &&
      this.props.song.id === this.props.selectedSongId
    ) {
      menu = (
        <DropdownMenu
          toggleDropdownMenu={this.props.toggleDropdownMenu}
          typeId={this.props.match.params.typeId}
          swapAddSongFormShow={this.props.swapAddSongFormShow}
          menuPos={menuPos}
          song={this.props.song}
          shouldHaveDeleteOption={this.props.match.params.type === "playlists"}
          deleteSongFromPlaylist={this.props.deleteSongFromPlaylist}
          selectSongId={this.props.selectSongId}
        />
      );
    }
    let activeClass = "";
    let threeDots = "";
    const playBtn = (
      <i
        className="fa fa-play clickable"
        aria-hidden="true"
        onClick={this.handleClick}
      />
    );

    const pauseBtn = (
      <i
        className="fa fa-pause-circle-o clickable"
        aria-hidden="true"
        onClick={this.handleClick}
      />
    );

    let numOrPlayBtn = this.props.listNum + ".";

    if (this.props.selectedSongId === this.props.song.id) {
      activeClass = "hovered-song";
      threeDots = (
        <div onClick={this.displayDropdownMenu} className="three-dots">
          <i className="fa fa-circle" aria-hidden="true" />
          <i className="fa fa-circle" aria-hidden="true" />
          <i className="fa fa-circle" aria-hidden="true" />
        </div>
      );
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
      <div
        className={`song-item-container ${activeClass}`}
        onMouseEnter={this.hoverOverSong}
        onMouseLeave={this.leaveSong}
      >
        <div className="song-item-content">
          <div className="song-item">
            <div className="song-btn-container">{numOrPlayBtn}</div>
            <div className="song-item-info">
              {this.props.song.title}
              <Link to={`/collection/artists/${this.props.song.artist_id}`}>
                {this.props.artist.name}
              </Link>
            </div>
          </div>
        </div>
        <div className="menu-content">
          {threeDots}
          {menu}
        </div>
      </div>
    );
  }
}

export default SongIndexItem;
