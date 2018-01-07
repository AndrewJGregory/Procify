import { withRouter } from 'react-router-dom';
import InnerCollection from './inner_collection';
import SongIndex from './song_index';
import { connect } from 'react-redux';
import { fetchSongs } from '../actions/song_actions';
import { PlaylistIndex } from './playlist_index';

const mapStateToProps = (state, ownProps) => {
  let component = null;
  switch (ownProps.match.params.type) {
    case 'tracks':
    component = SongIndex;
    break;
    case 'playlists':
    component = PlaylistIndex;
    break;
    default:
    component = null;
  }

  return {
    component,
    songs: Object.values(state.entities.songs)
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  let fetchAction;
  switch (ownProps.match.params.type) {
    case 'tracks':
    fetchAction = fetchSongs;
    break;
    default:
    fetchAction = null;
  }
  return {
    fetchAction: () => dispatch(fetchAction())
  };
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(InnerCollection));
