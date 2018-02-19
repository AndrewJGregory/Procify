export const SWAP_PLAYLIST_FORM_SHOW = "SWAP_PLAYLIST_FORM_SHOW";
export const TOGGLE_SUCCESS_MSG = "TOGGLE_SUCCESS_MSG";
export const SWAP_ADD_SONG_FORM_SHOW = "SWAP_ADD_SONG_FORM_SHOW";
export const SELECT_SONG_ID = "SELECT_SONG_ID";
export const SET_DROPDOWN_MENU_COORDS = "SET_DROPDOWN_MENU_COORDS";
export const TOGGLE_DROPDOWN_MENU = "TOGGLE_DROPDOWN_MENU";
export const SELECT_HOVERED_SONG_ID = "SELECT_HOVERED_SONG_ID";

export const toggleSuccessMsg = () => {
  return {
    type: TOGGLE_SUCCESS_MSG
  };
};

export const swapPlaylistFormShow = () => {
  return {
    type: SWAP_PLAYLIST_FORM_SHOW
  };
};

export const setDropdownMenuCoords = (xPos, yPos) => {
  return {
    type: SET_DROPDOWN_MENU_COORDS,
    xPos,
    yPos
  };
};

export const toggleDropdownMenu = () => {
  return {
    type: TOGGLE_DROPDOWN_MENU
  };
};

export const swapAddSongFormShow = () => {
  return {
    type: SWAP_ADD_SONG_FORM_SHOW
  };
};

export const selectSongId = songId => {
  return {
    type: SELECT_SONG_ID,
    songId
  };
};

export const selectHoveredSongId = id => {
  return {
    type: SELECT_HOVERED_SONG_ID,
    id
  };
};
