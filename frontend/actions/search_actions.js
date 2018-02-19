import * as searchUtil from "../util/search_util.jsx";
export const RECEIVE_SEARCH_RESULTS = "RECEIVE_SEARCH_RESULTS";

export const receiveSearchResults = results => {
  return {
    type: RECEIVE_SEARCH_RESULTS,
    results
  };
};

export const clearSearchResults = () => {
  const emptyResults = {
    albums: {},
    artists: {},
    playlists: {},
    songs: {}
  };
  return receiveSearchResults(emptyResults);
};

export const fetchSearchResults = query => dispatch => {
  return searchUtil.fetchSearchResults(query).then(payload => {
    dispatch(receiveSearchResults(payload));
    return payload;
  });
};
