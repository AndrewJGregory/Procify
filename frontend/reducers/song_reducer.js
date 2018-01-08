import { RECEIVE_SONGS, RECEIVE_SONG } from '../actions/song_actions';
import { RECEIVE_NEW_PLAYLIST } from '../actions/playlist_actions';
import { merge } from 'lodash';

const songReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_SONGS:
    return merge({}, state, action.songs);
    case RECEIVE_SONG:
    return merge({}, state, {[action.song.id]: action.song});
    case RECEIVE_NEW_PLAYLIST:
    return Object.assign({}, state, action.payload.songs);
    default:
    return state;
  }
};

export default songReducer;
