import { connect } from 'react-redux';
import SongIndexItem from './song_index_item';
import {
  swapAddSongFormShow,
  selectSongId,
  toggleDropdownMenu,
  setDropdownMenuCoords,
  deleteSongFromPlaylist,
  selectHoveredSongId
} from '../actions/song_actions';

import { toggleSongPlaying,
setAudioSrc,
selectPlayingSong,
} from '../actions/playing_song_actions';

import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => {
  const xPos = state.ui.dropdownMenuXpos;
  const yPos = state.ui.dropdownMenuYpos;
  return {
    isAddSongFormDisplayed: state.ui.isAddSongFormDisplayed,
    isDropdownMenuDisplayed: state.ui.isDropdownMenuDisplayed,
    xPos,
    yPos,
    audio: state.ui.audio,
    selectedSongId: state.ui.hoveredSongId
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
    selectHoveredSongId: id => dispatch(selectHoveredSongId(id))
  };
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(SongIndexItem));
