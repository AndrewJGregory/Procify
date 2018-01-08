import { SWAP_PLAYLIST_FORM_SHOW } from '../actions/playlist_actions';
import { SWAP_ADD_SONG_FORM_SHOW, SELECT_SONG_ID } from '../actions/song_actions';

const initialState = {
  isPlaylistFormDisplayed: false,
  isAddSongFormDisplayed: false,
  selectedSongId: null
};

const uiReducer = (state = initialState, action) => {
  switch (action.type) {
    case SWAP_PLAYLIST_FORM_SHOW:
    return Object.assign(
      {},
      state,
      {isPlaylistFormDisplayed:
        !state.isPlaylistFormDisplayed}
    );
    case SWAP_ADD_SONG_FORM_SHOW:
    return Object.assign(
      {},
      state,
      {isAddSongFormDisplayed:
      !state.isAddSongFormDisplayed}
    );
    case SELECT_SONG_ID:
    return Object.assign(
      {},
      state,
      {selectedSongId: action.songId}
    );
    default:
    return state;
  }
};
export default uiReducer;
