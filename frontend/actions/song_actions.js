import * as SongUtil from '../util/song_util';
export const RECEIVE_SONGS = 'RECEIVE_SONGS';
export const SWAP_ADD_SONG_FORM_SHOW = 'SWAP_ADD_SONG_FORM_SHOW';
export const SELECT_SONG_ID = 'SELECT_SONG_ID';
export const RECEIVE_SONG = 'RECEIVE_SONG';
export const SELECT_PLAYING_SONG = 'SELECT_PLAYING_SONG';
export const SET_DROPDOWN_MENU_COORDS = 'SET_DROPDOWN_MENU_COORDS';
export const TOGGLE_DROPDOWN_MENU = 'TOGGLE_DROPDOWN_MENU';

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

export const receiveSong = song => {
  return {
    type: RECEIVE_SONG,
    song
  };
};

export const receiveSongs = songs => {
  return {
    type: RECEIVE_SONGS,
    songs
  };
};

export const fetchSongs = () => dispatch => {
  return SongUtil.fetchSongs().then(songs => {
    return dispatch(receiveSongs(songs));
  });
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

export const deleteSongFromPlaylist = (userId, songId, playlistId) => dispatch => {
  return SongUtil.deleteSongFromPlaylist(userId, songId, playlistId).then(song => {
    dispatch(receiveSong(song));
    return song;
  });
};

export const selectPlayingSong = song => {
  return {
    type: SELECT_PLAYING_SONG,
    song
  };
};
