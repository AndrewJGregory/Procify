import { withRouter } from "react-router-dom";
import InnerCollection from "./inner_collection";
import SongIndexContainer from "./song_index_container";
import { connect } from "react-redux";
import { fetchSongs } from "../actions/song_actions";
import PlaylistIndexContainer from "./playlist_index_container";
import {
  fetchCurrentUsersPlaylists,
  fetchPlaylist
} from "../actions/playlist_actions";
import PlaylistShowContainer from "./playlist_show_container";
import * as innerCollectionUtil from "../util/inner_collection_util";
import AccountInfoContainer from "./account_info_container";
import { fetchAlbum, fetchAlbums } from "../actions/album_actions";
import AlbumIndexContainer from "./album_index_container";
import AlbumShowContainer from "./album_show_container";
import { fetchArtist, fetchArtists } from "../actions/artist_actions";
import ArtistIndexContainer from "./artist_index_container";
import ArtistShowContainer from "./artist_show_container";

const mapStateToProps = (state, ownProps) => {
  const components = {
    SongIndexContainer,
    PlaylistShowContainer,
    PlaylistIndexContainer,
    AccountInfoContainer,
    AlbumIndexContainer,
    AlbumShowContainer,
    ArtistIndexContainer,
    ArtistShowContainer
  };

  const component = innerCollectionUtil.switchOnType(
    ownProps,
    components,
    {},
    "component"
  );

  return {
    component,
    songs: Object.values(state.entities.songs),
    playlists: Object.values(state.entities.playlists),
    albums: Object.values(state.entities.albums),
    artists: Object.values(state.entities.artists),
    currentUserId: state.session.currentUser.id,
    isAddSongFormDisplayed: state.ui.isAddSongFormDisplayed,
    isPlaylistFormDisplayed: state.ui.isPlaylistFormDisplayed
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const actions = {
    fetchSongs,
    fetchPlaylist,
    fetchCurrentUsersPlaylists,
    fetchAlbum,
    fetchAlbums,
    fetchArtist,
    fetchArtists
  };

  const fetchAction = innerCollectionUtil.switchOnType(
    ownProps,
    {},
    actions,
    "action"
  );

  return {
    fetchAction: id => dispatch(fetchAction(id))
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(InnerCollection)
);
