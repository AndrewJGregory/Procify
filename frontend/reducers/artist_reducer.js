import { RECEIVE_ARTIST, RECEIVE_ARTISTS } from '../actions/artist_actions';

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
    default:
    return state;
  }
};
export default artistReducer;
