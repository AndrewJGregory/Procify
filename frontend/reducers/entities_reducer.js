import { combineReducers } from "redux";
import playlistReducer from "./playlist_reducer";
import songReducer from "./song_reducer";
import albumReducer from "./album_reducer";
import artistReducer from "./artist_reducer";

const entitiesReducer = combineReducers({
  playlists: playlistReducer,
  songs: songReducer,
  albums: albumReducer,
  artists: artistReducer
});

export default entitiesReducer;
