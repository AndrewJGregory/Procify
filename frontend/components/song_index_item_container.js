import { connect } from 'react-redux';
import SongIndexItem from './song_index_item';
import {
  swapAddSongFormShow,
  selectSongId,
  toggleDropdownMenu,
  setDropdownMenuCoords,
  selectHoveredSongId
} from '../actions/ui_actions';
import { deleteSongFromPlaylist } from '../actions/song_actions';

import { toggleSongPlaying,
  setAudioSrc,
  selectPlayingSong,
  setTime
} from '../actions/playing_song_actions';

import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => {
  const xPos = state.ui.dropdownMenuXpos;
  const yPos = state.ui.dropdownMenuYpos;
  const songId = ownProps.song.id;
  const song = state.entities.songs[songId] || ownProps.song;
  let artist = {};
  if (song && Object.is({}, song)) {
    let artistId = state.entities.songs[song.id].artist_id;
    artist = state.entities.artists[artistId];
  }

  return {
    isAddSongFormDisplayed: state.ui.isAddSongFormDisplayed,
    isDropdownMenuDisplayed: state.ui.isDropdownMenuDisplayed,
    xPos,
    yPos,
    audio: state.ui.audio,
    selectedSongId: state.ui.hoveredSongId,
    isSongPlaying: state.ui.isSongPlaying,
    playingSongId: state.ui.playingSong.id,
    intervalId: state.ui.intervalId,
    artist,
    song
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setDropdownMenuCoords: (xPos, yPos) => dispatch(setDropdownMenuCoords(xPos, yPos)),
    toggleDropdownMenu: () => dispatch(toggleDropdownMenu()),
    deleteSongFromPlaylist: (songId, playlistId) => dispatch(deleteSongFromPlaylist(songId, playlistId)),
    selectSongId: songId => dispatch(selectSongId(songId)),
    swapAddSongFormShow: () => dispatch(swapAddSongFormShow()),
    toggleSongPlaying: () => dispatch(toggleSongPlaying()),
    setAudioSrc: audioSrc => dispatch(setAudioSrc(audioSrc)),
    selectPlayingSong: song => dispatch(selectPlayingSong(song)),
    selectHoveredSongId: id => dispatch(selectHoveredSongId(id)),
    setTime: time => dispatch(setTime(time)),
  };
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(SongIndexItem));
