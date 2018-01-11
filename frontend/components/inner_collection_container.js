import { withRouter } from 'react-router-dom';
import InnerCollection from './inner_collection';
import SongIndex from './song_index';
import { connect } from 'react-redux';
import { fetchSongs } from '../actions/song_actions';
import PlaylistIndexContainer from './playlist_index_container';
import { fetchCurrentUsersPlaylists, fetchPlaylist } from '../actions/playlist_actions';
import PlaylistShowContainer from './playlist_show_container';
import * as innerCollectionUtil from '../util/inner_collection_util';
import AccountInfoContainer from './account_info_container';
import { fetchAlbum, fetchAlbums } from '../actions/album_actions';
import AlbumIndex from './album_index';

const mapStateToProps = (state, ownProps) => {
  const components = {
    SongIndex,
    PlaylistShowContainer,
    PlaylistIndexContainer,
    AccountInfoContainer,
    AlbumIndex
  };

  const component = innerCollectionUtil.switchOnType(
    ownProps, components, {}, 'component'
  );

  return {
    component,
    songs: Object.values(state.entities.songs),
    playlists: Object.values(state.entities.playlists),
    albums: Object.values(state.entities.albums),
    currentUserId: state.session.currentUser.id,
    isAddSongFormDisplayed: state.ui.isAddSongFormDisplayed
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const actions = {
    fetchSongs,
    fetchPlaylist,
    fetchCurrentUsersPlaylists,
    fetchAlbum,
    fetchAlbums
  };

  const fetchAction = innerCollectionUtil.switchOnType(
    ownProps, {}, actions, 'action'
  );

  return {
    fetchAction: id => dispatch(fetchAction(id))
  };
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(InnerCollection));
