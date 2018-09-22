import { RECEIVE_SONGS, RECEIVE_SONG } from "../actions/song_actions";
import { RECEIVE_NEW_PLAYLIST } from "../actions/playlist_actions";
import { RECEIVE_ALBUM } from "../actions/album_actions";
import { RECEIVE_ARTIST } from "../actions/artist_actions";
import { MOVE_TO_ENTITIES } from "../actions/search_actions";
import isEmpty from "lodash/isEmpty";

const songReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_SONGS:
    case RECEIVE_ARTIST:
    case RECEIVE_ALBUM:
    case RECEIVE_NEW_PLAYLIST:
      return Object.assign({}, state, action.payload.songs);
    case RECEIVE_SONG:
      return Object.assign({}, state, { [action.song.id]: action.song });
    case MOVE_TO_ENTITIES:
      if (!isEmpty(action.results.songs)) {
        let newSongs = {};
        action.results.songs.forEach(song => {
          newSongs[song.id] = song;
        });
        return Object.assign({}, state, newSongs);
      } else {
        return state;
      }
    default:
      return state;
  }
};

export default songReducer;
