import { connect } from 'react-redux';
import SongIndexItem from './song_index_item';
import {
  swapAddSongFormShow,
  selectSongId,
  selectPlayingSong,
  toggleDropdownMenu,
  setDropdownMenuCoords,
  deleteSongFromPlaylist
} from '../actions/song_actions';

import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => {
  const shouldHaveDeleteButton = (ownProps.match.params.type === 'playlists');
  const xPos = state.ui.dropdownMenuXpos;
  const yPos = state.ui.dropdownMenuYpos;
  return {
    isAddSongFormDisplayed: state.ui.isAddSongFormDisplayed,
    shouldHaveDeleteButton,
    isDropdownMenuDisplayed: state.ui.isDropdownMenuDisplayed,
    xPos,
    yPos
  };
};

const mapDispatchToProps = dispatch => {
  return {
    selectPlayingSong: song => dispatch(selectPlayingSong(song)),
    setDropdownMenuCoords: (xPos, yPos) => dispatch(setDropdownMenuCoords(xPos, yPos)),
    toggleDropdownMenu: () => dispatch(toggleDropdownMenu()),
    deleteSongFromPlaylist: (songId, playlistId) => dispatch(deleteSongFromPlaylist(songId, playlistId)),
    selectSongId: songId => dispatch(selectSongId(songId)),
    swapAddSongFormShow: () => dispatch(swapAddSongFormShow()),
  };
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(SongIndexItem));
