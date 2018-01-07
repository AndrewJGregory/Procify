import { withRouter } from 'react-router-dom';
import InnerCollection from './inner_collection';
import SongIndex from './song_index';
import { connect } from 'react-redux';
import { fetchSongs } from '../actions/song_actions';
import PlaylistIndex from './playlist_index';
import { fetchCurrentUsersPlaylists, fetchPlaylist } from '../actions/playlist_actions';
import PlaylistShowContainer from './playlist_show_container';

const mapStateToProps = (state, ownProps) => {
  let component = null;
  switch (ownProps.match.params.type) {
    case 'tracks':
    component = SongIndex;
    break;
    case 'playlists':
    if (ownProps.match.params.userId && ownProps.match.params.typeId) {
      component = PlaylistShowContainer;
    } else {
      component = PlaylistIndex;
    }
    break;
    default:
    component = null;
  }

  return {
    component,
    songs: Object.values(state.entities.songs),
    playlists: Object.values(state.entities.playlists),
    currentUserId: state.session.currentUser.id,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  let fetchAction;
  switch (ownProps.match.params.type) {
    case 'tracks':
    fetchAction = fetchSongs;
    break;
    case 'playlists':
    if (ownProps.match.params.userId && ownProps.match.params.typeId) {
      fetchAction = fetchPlaylist;
    } else {
      fetchAction = fetchCurrentUsersPlaylists;
    }
    break;
    default:
    fetchAction = () => null;
  }

  return {
    fetchAction: id => dispatch(fetchAction(id))
  };
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(InnerCollection));
