import { connect } from 'react-redux';
import SongIndexItem from './song_index_item';
import { swapAddSongFormShow, selectSongId } from '../actions/song_actions';
import { deleteSongFromPlaylist } from '../actions/song_actions';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => {
  const shouldHaveDeleteButton = (ownProps.match.params.type === 'playlists');
  return {
    isAddSongFormDisplayed: state.ui.isAddSongFormDisplayed,
    shouldHaveDeleteButton
  };
};

const mapDispatchToProps = dispatch => {
  return {
    swapAddSongFormShow: () => dispatch(swapAddSongFormShow()),
    selectSongId: songId => dispatch(selectSongId(songId)),
    deleteSongFromPlaylist: (songId, playlistId) => dispatch(deleteSongFromPlaylist(songId, playlistId))
  };
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(SongIndexItem));
