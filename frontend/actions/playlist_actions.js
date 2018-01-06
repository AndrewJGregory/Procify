export const SWAP_PLAYLIST_FORM_SHOW = 'SWAP_PLAYLIST_FORM_SHOW';
export const RECEIVE_NEW_PLAYLIST = 'RECEIVE_NEW_PLAYLIST';

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

export const createNewPlaylist = playlist => dispatch => {
  return PlaylistUtil.createNewPlaylist(playlist).then(newPlaylist => {
    dispatch(receiveNewPlaylist(newPlaylist));
    return newPlaylist;
  });
};

export const fetchPlaylist = id => dispatch => {
  return PlaylistUtil.fetchPlaylist(id).then(playlist => {
    dispatch(receiveNewPlaylist(playlist));
    return playlist;
  });
};
