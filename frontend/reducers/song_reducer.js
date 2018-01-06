import { RECEIVE_SONGS } from '../actions/song_actions';
import { RECEIVE_NEW_PLAYLIST } from '../actions/playlist_actions';

const songReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_SONGS:
    return Object.assign({}, state, action.songs);
    case RECEIVE_NEW_PLAYLIST:
    return Object.assign({}, state, action.payload.songs);
    default:
    return state;
  }
};
export default songReducer;
