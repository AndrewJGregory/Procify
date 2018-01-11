import { RECEIVE_ARTIST, RECEIVE_ARTISTS } from '../actions/artist_actions';
import { RECEIVE_SONGS } from '../actions/song_actions';
import { RECEIVE_ALBUMS, RECEIVE_ALBUM } from '../actions/album_actions';

const artistReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_ARTISTS:
    return Object.assign(
      {},
      state,
      action.artists
    );
    case RECEIVE_ARTIST:
    return Object.assign(
      {},
      state,
      action.payload.artist
    );
    case RECEIVE_SONGS:
    return Object.assign(
      {},
      state,
      action.payload.artists
    );
    case RECEIVE_ALBUMS:
    return Object.assign(
      {},
      state,
      action.payload.artists
    );
    case RECEIVE_ALBUM:
    
    return Object.assign(
      {},
      state,
      action.payload.artist
    );
    default:
    return state;
  }
};
export default artistReducer;
