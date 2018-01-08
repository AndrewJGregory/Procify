import * as SongUtil from '../util/song_util';
export const RECEIVE_SONGS = 'RECEIVE_SONGS';
export const SWAP_ADD_SONG_FORM_SHOW = 'SWAP_ADD_SONG_FORM_SHOW';
export const SELECT_SONG_ID = 'SELECT_SONG_ID';

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
