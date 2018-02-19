import { RECEIVE_SEARCH_RESULTS } from "../actions/search_actions";

const defaultState = {
  albums: {},
  artists: {},
  songs: {},
  playlists: {}
};

const searchReducer = (state = defaultState, action) => {
  switch (action.type) {
    case RECEIVE_SEARCH_RESULTS:
      ["artists", "albums", "songs", "playlists"].forEach(type => {
        action.results[type] = action.results[type] || {};
      });
      return action.results;
    default:
      return state;
  }
};
export default searchReducer;
