export const SWAP_PLAYLIST_FORM_SHOW = 'SWAP_PLAYLIST_FORM_SHOW';
export const RECEIVE_NEW_PLAYLIST = 'RECEIVE_NEW_PLAYLIST';
export const RECEIVE_PLAYLISTS = 'RECEIVE_PLAYLISTS';

import * as PlaylistUtil from '../util/playlist_util';

export const swapPlaylistFormShow = () => {
  return {
    type: SWAP_PLAYLIST_FORM_SHOW
  };
};

export const receiveNewPlaylist = payload => {
  return {
    type: RECEIVE_NEW_PLAYLIST,
    payload
  };
};

export const receivePlaylists = playlists => {
  return {
    type: RECEIVE_PLAYLISTS,
    playlists
  };
};

export const createNewPlaylist = playlist => dispatch => {
  return PlaylistUtil.createNewPlaylist(playlist).then(newPlaylist => {
    dispatch(receiveNewPlaylist(newPlaylist));
    return newPlaylist;
  });
};

export const fetchPlaylist = playlistId => dispatch => {
  return PlaylistUtil.fetchPlaylist(playlistId).then(playlist => {
    dispatch(receiveNewPlaylist(playlist));
    return playlist;
  });
};

export const fetchCurrentUsersPlaylists = currentUserId => dispatch => {
  return PlaylistUtil.fetchCurrentUsersPlaylists(currentUserId).then(playlists => {
    dispatch(receivePlaylists(playlists));
    return playlists;
  });
};

export const addSongToPlaylist = (userId, songId, playlistId) => dispatch => {
  return PlaylistUtil.addSongToPlaylist(userId, songId, playlistId).then(payload => {
    dispatch(receiveNewPlaylist(payload));
    return payload;
  });
};
