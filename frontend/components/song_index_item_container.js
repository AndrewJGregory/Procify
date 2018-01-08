import { connect } from 'react-redux';
import SongIndexItem from './song_index_item';
import { swapAddSongFormShow, selectSongId } from '../actions/song_actions';
import { deleteSongFromPlaylist } from '../actions/song_actions';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => {
  return {
    isAddSongFormDisplayed: state.ui.isAddSongFormDisplayed,
    currentUserId: state.session.currentUser.id,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    swapAddSongFormShow: () => dispatch(swapAddSongFormShow()),
    selectSongId: songId => dispatch(selectSongId(songId)),
    deleteSongFromPlaylist: (userId, songId, playlistId) => dispatch(deleteSongFromPlaylist(userId, songId, playlistId))
  };
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(SongIndexItem));
