import { connect } from 'react-redux';
import PlaylistIndexItem from './playlist_index_item';
import { withRouter } from 'react-router-dom';
import { addSongToPlaylist, toggleSuccessMsg } from '../actions/playlist_actions';
import { swapAddSongFormShow } from '../actions/song_actions';

const mapStateToProps = state => {
  const currentUserId = state.session.currentUser.id;
  const isAddSongFormDisplayed = state.ui.isAddSongFormDisplayed;
  const selectedSongId = state.ui.selectedSongId;
  return { currentUserId, isAddSongFormDisplayed, selectedSongId };
};

const mapDispatchToProps = dispatch => {
  return {
    addSongToPlaylist: (userId, songId, playlistId) => dispatch(addSongToPlaylist(userId, songId, playlistId)),
    swapAddSongFormShow: () => dispatch(swapAddSongFormShow()),
    toggleSuccessMsg: () => dispatch(toggleSuccessMsg())
  };
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(PlaylistIndexItem));
