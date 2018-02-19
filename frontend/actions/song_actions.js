import * as SongUtil from "../util/song_util";
export const RECEIVE_SONGS = "RECEIVE_SONGS";
export const RECEIVE_SONG = "RECEIVE_SONG";

export const receiveSong = song => {
  return {
    type: RECEIVE_SONG,
    song
  };
};

export const receiveSongs = payload => {
  return {
    type: RECEIVE_SONGS,
    payload
  };
};

export const fetchSongs = () => dispatch => {
  return SongUtil.fetchSongs().then(payload => {
    return dispatch(receiveSongs(payload));
  });
};

export const deleteSongFromPlaylist = (
  userId,
  songId,
  playlistId
) => dispatch => {
  return SongUtil.deleteSongFromPlaylist(userId, songId, playlistId).then(
    song => {
      dispatch(receiveSong(song));
      return song;
    }
  );
};
