import { RECEIVE_SEARCH_RESULTS } from '../actions/search_actions';

const searchReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_SEARCH_RESULTS:
    return state;
    default:
    return state;
  }
};
export default searchReducer;
