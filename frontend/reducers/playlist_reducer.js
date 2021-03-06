import {
  RECEIVE_NEW_PLAYLIST,
  RECEIVE_PLAYLISTS,
  REMOVE_PLAYLIST
} from "../actions/playlist_actions";

const playlistReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState;
  switch (action.type) {
    case RECEIVE_NEW_PLAYLIST:
      return Object.assign({}, state, action.payload);
    case RECEIVE_PLAYLISTS:
      return Object.assign({}, state, action.playlists);
    case REMOVE_PLAYLIST:
      newState = Object.assign({}, state);
      delete newState[action.playlistId];
      return newState;
    default:
      return state;
  }
};
export default playlistReducer;
