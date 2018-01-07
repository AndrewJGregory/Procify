import { RECEIVE_NEW_PLAYLIST, RECEIVE_PLAYLISTS } from '../actions/playlist_actions';

const playlistReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_NEW_PLAYLIST:
    return Object.assign({}, state, action.payload.playlist);
    case RECEIVE_PLAYLISTS:
    return Object.assign({}, state, action.playlists);
    default:
    return state;
  }
};
export default playlistReducer;
