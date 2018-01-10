import { connect } from 'react-redux';
import PlaylistShow from './playlist_show';
import { withRouter } from 'react-router-dom';
import { deletePlaylist } from '../actions/playlist_actions';

const mapStateToProps = (state, ownProps) => {

  const playlistId = parseInt(ownProps.match.params.typeId);
  const songs = [];
  let duplicateCount = 0;
  Object.values(state.entities.songs).forEach(song => {
    if (song.playlist_ids.includes(playlistId)) {
      duplicateCount =
      (song.playlist_ids.filter(id => id === playlistId).length);
      while (duplicateCount > 0) {
        songs.push(song);
        duplicateCount--;
      }
    }
  });

  return { songs, playlistId };
};

const mapDispatchToProps = dispatch => {
  return {
    deletePlaylist: playlistId => dispatch(deletePlaylist(playlistId))
  };
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(PlaylistShow));
