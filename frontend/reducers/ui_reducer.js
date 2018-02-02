import { SWAP_PLAYLIST_FORM_SHOW,
  TOGGLE_SUCCESS_MSG,
  SWAP_ADD_SONG_FORM_SHOW,
  SELECT_SONG_ID,
  TOGGLE_DROPDOWN_MENU,
  SET_DROPDOWN_MENU_COORDS,
  SELECT_HOVERED_SONG_ID,
} from '../actions/ui_actions';

import { TOGGLE_SONG_PLAYING,
SET_AUDIO_SRC,
SELECT_PLAYING_SONG,
SET_INTERVAL_ID,
} from '../actions/playing_song_actions';

const audio = document.createElement('audio');

const initialState = {
  isPlaylistFormDisplayed: false,
  isAddSongFormDisplayed: false,
  selectedSongId: null,
  isDropdownMenuDisplayed: false,
  dropdownMenuXpos: 0,
  dropdownMenuYpos: 0,
  audio,
  isSongPlaying: false,
  playingSong: {},
  hoveredSongId: -1,
  intervalId: -1,
  isSuccessMsgDisplayed: false,
  successMsgClass: 'fadeOutUp',
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
        case TOGGLE_DROPDOWN_MENU:
        return Object.assign(
          {},
          state,
          {
            isDropdownMenuDisplayed: !state.isDropdownMenuDisplayed,
          });
          case SET_DROPDOWN_MENU_COORDS:
          return Object.assign(
            {},
            state,
            {dropdownMenuXpos: action.xPos, dropdownMenuYpos: action.yPos}
          );
          case TOGGLE_SONG_PLAYING:
          return Object.assign(
            {},
            state,
            {isSongPlaying: !state.isSongPlaying}
          );
          case SET_AUDIO_SRC:
          let newState = Object.assign({}, state);
          newState.audio.src = action.audioSrc;
          return newState;
          case SELECT_PLAYING_SONG:
          return Object.assign(
            {},
            state,
            {playingSong: action.song}
          );
          case SELECT_HOVERED_SONG_ID:
          return Object.assign(
            {},
            state,
            {hoveredSongId: action.id}
          );
          case SET_INTERVAL_ID:
          return Object.assign(
            {},
            state,
            {intervalId: action.id}
          );
          case TOGGLE_SUCCESS_MSG:
          const successMsgClass = (state.successMsgClass === 'slideInDown' ? 'fadeOutUp' : 'slideInDown');
          return Object.assign(
            {},
            state,
            {isSuccessMsgDisplayed: !state.isSuccessMsgDisplayed,
            successMsgClass}
          );
          default:
          return state;
        }
      };
      export default uiReducer;
