import { RECEIVE_ALBUM, RECEIVE_ALBUMS } from '../actions/album_actions';
import { RECEIVE_ARTIST } from '../actions/artist_actions';
import { RECEIVE_SONGS } from '../actions/song_actions';

const albumReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_ALBUM:
    return Object.assign(
      {},
      state,
      action.payload.album
    );
    case RECEIVE_ALBUMS:
    return Object.assign(
      {},
      state,
      action.payload.albums
    );
    case RECEIVE_ARTIST:
    return Object.assign(
      {},
      state,
      action.payload.albums
    );
    case RECEIVE_SONGS:
    return Object.assign(
      {},
      state,
      action.payload.albums
    );
    default:
    return state;
  }
};
export default albumReducer;
