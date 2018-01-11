import { RECEIVE_ARTIST, RECEIVE_ARTISTS } from '../actions/artist_actions';
import { RECEIVE_SONGS } from '../actions/song_actions';

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
    default:
    return state;
  }
};
export default artistReducer;
