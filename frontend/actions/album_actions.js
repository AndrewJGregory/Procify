import * as albumUtil from "../util/album_util";
export const RECEIVE_ALBUM = "RECEIVE_ALBUM";
export const RECEIVE_ALBUMS = "RECEIVE_ALBUMS";

export const receiveAlbum = payload => {
  return {
    type: RECEIVE_ALBUM,
    payload
  };
};

export const receiveAlbums = payload => {
  return {
    type: RECEIVE_ALBUMS,
    payload
  };
};

export const fetchAlbum = id => dispatch => {
  return albumUtil.fetchAlbum(id).then(payload => {
    dispatch(receiveAlbum(payload));
    return payload;
  });
};

export const fetchAlbums = () => dispatch => {
  return albumUtil.fetchAlbums().then(payload => {
    dispatch(receiveAlbums(payload));
    return payload;
  });
};
