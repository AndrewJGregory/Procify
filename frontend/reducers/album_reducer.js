import { RECEIVE_ALBUM, RECEIVE_ALBUMS } from '../actions/album_actions';

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
      action.albums
    );
    default:
    return state;
  }
};
export default albumReducer;
