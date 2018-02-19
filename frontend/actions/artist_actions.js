import * as artistApiUtil from "../util/artist_util";
export const RECEIVE_ARTISTS = "RECEIVE_ARTISTS";
export const RECEIVE_ARTIST = "RECEIVE_ARTIST";

export const receiveArtists = artists => {
  return {
    type: RECEIVE_ARTISTS,
    artists
  };
};

export const receiveArtist = payload => {
  return {
    type: RECEIVE_ARTIST,
    payload
  };
};

export const fetchArtist = id => dispatch => {
  return artistApiUtil.fetchArtist(id).then(payload => {
    dispatch(receiveArtist(payload));
    return payload;
  });
};

export const fetchArtists = () => dispatch => {
  return artistApiUtil.fetchArtists().then(artists => {
    dispatch(receiveArtists(artists));
    return artists;
  });
};
