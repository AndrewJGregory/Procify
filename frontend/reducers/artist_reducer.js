import { RECEIVE_ARTIST, RECEIVE_ARTISTS } from "../actions/artist_actions";
import { RECEIVE_SONGS } from "../actions/song_actions";
import { RECEIVE_ALBUMS, RECEIVE_ALBUM } from "../actions/album_actions";
import { RECEIVE_NEW_PLAYLIST } from "../actions/playlist_actions";
import { MOVE_TO_ENTITIES } from "../actions/search_actions";
import isEmpty from "lodash/isEmpty";

const artistReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_ARTISTS:
      return Object.assign({}, state, action.artists);
    case RECEIVE_ARTIST:
      return Object.assign({}, state, action.payload.artist);
    case RECEIVE_SONGS:
      return Object.assign({}, state, action.payload.artists);
    case RECEIVE_ALBUMS:
      return Object.assign({}, state, action.payload.artists);
    case RECEIVE_ALBUM:
      return Object.assign({}, state, action.payload.artist);
    case RECEIVE_NEW_PLAYLIST:
      return Object.assign({}, state, action.payload.artists);
    case MOVE_TO_ENTITIES:
      if (!isEmpty(action.results.artists)) {
        let newArtists = {};
        action.results.artists.forEach(artist => {
          newArtists[artist.id] = artist;
        });
        return Object.assign({}, state, newArtists);
      } else {
        return state;
      }
    default:
      return state;
  }
};
export default artistReducer;
