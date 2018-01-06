import { connect } from 'react-redux';
import PlaylistShow from './playlist_show';
import { fetchPlaylist } from '../actions/playlist_actions';

const mapStateToProps = (state, ownProps) => {
  const playlistId = ownProps.match.params.typeId;
  const songs = Object.values(state.entities.songs).filter(song => (
    song.playlist_id === parseInt(playlistId)
  ));
  return { songs };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchPlaylist: id => dispatch(fetchPlaylist(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PlaylistShow);
