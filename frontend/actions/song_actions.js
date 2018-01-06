import * as SongUtil from '../util/song_util';
export const RECEIVE_SONGS = 'RECEIVE_SONGS';

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
