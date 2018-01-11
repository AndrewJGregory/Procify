import * as albumUtil from '../util/album_util';
export const RECEIVE_ALBUM = 'RECEIVE_ALBUM';
export const RECEIVE_ALBUMS = 'RECEIVE_ALBUMS';

export const receiveAlbum = payload => {
  return {
    type: RECEIVE_ALBUM,
    payload
  };
};

export const receiveAlbums = albums => {
  return {
    type: RECEIVE_ALBUMS,
    albums
  };
};

export const fetchAlbum = id => dispatch => {
  return albumUtil.fetchAlbum(id).then(payload => {
    dispatch(receiveAlbum(payload));
    return payload;
  });
};

export const fetchAlbums = () => dispatch => {
  return albumUtil.fetchAlbums().then(albums => {
    dispatch(receiveAlbums(albums));
    return albums;
  });
};
