import { RECEIVE_NEW_PLAYLIST } from '../actions/playlist_actions';

const playlistReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_NEW_PLAYLIST:
    debugger;
    return Object.assign({}, state, action.playlist);
    default:
    return state;
  }
};
export default playlistReducer;
