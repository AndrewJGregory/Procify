import { SWAP_PLAYLIST_FORM_SHOW } from '../actions/playlist_actions';
import {
  SWAP_ADD_SONG_FORM_SHOW,
  SELECT_SONG_ID,
  SELECT_PLAYING_SONG,
  TOGGLE_DROPDOWN_MENU,
  SET_DROPDOWN_MENU_COORDS
} from '../actions/song_actions';

const initialState = {
  isPlaylistFormDisplayed: false,
  isAddSongFormDisplayed: false,
  selectedSongId: null,
  playingSong: {},
  isDropdownMenuDisplayed: false,
  dropdownMenuXpos: 0,
  dropdownMenuYpos: 0
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
        case SELECT_PLAYING_SONG:
        return Object.assign(
          {},
          state,
          {playingSong: action.song}
        );
        case TOGGLE_DROPDOWN_MENU:
        return Object.assign(
          {},
          state,
          {
            isDropdownMenuDisplayed: !state.isDropdownMenuDisplayed,
          });
          case SET_DROPDOWN_MENU_COORDS:
          let newState = Object.assign(
            {},
            state,
            {dropdownMenuXpos: action.xPos, dropdownMenuYpos: action.yPos}
          );
          return newState;
          default:
          return state;
        }
      };
      export default uiReducer;
