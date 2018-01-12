export const SWAP_PLAYLIST_FORM_SHOW = 'SWAP_PLAYLIST_FORM_SHOW';
export const RECEIVE_NEW_PLAYLIST = 'RECEIVE_NEW_PLAYLIST';
export const RECEIVE_PLAYLISTS = 'RECEIVE_PLAYLISTS';
export const REMOVE_PLAYLIST = 'REMOVE_PLAYLIST';
export const TOGGLE_SUCCESS_MSG = 'TOGGLE_SUCCESS_MSG';

import * as PlaylistUtil from '../util/playlist_util';

export const toggleSuccessMsg = () => {
  return {
    type: TOGGLE_SUCCESS_MSG
  };
};

export const removePlaylist = playlist => {
  return {
    type: REMOVE_PLAYLIST,
    playlistId: Object.keys(playlist)[0]
  };
};

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

export const deletePlaylist = playlistId => dispatch => {
  return PlaylistUtil.deletePlaylist(playlistId).then(playlist => {
    dispatch(removePlaylist(playlist));
    return playlist;
  });
};
