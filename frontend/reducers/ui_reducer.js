import { SWAP_PLAYLIST_FORM_SHOW } from '../actions/playlist_actions';

const initialState = {
  isPlaylistFormDisplayed: false,
};

const uiReducer = (state = initialState, action) => {
  switch (action.type) {
    case SWAP_PLAYLIST_FORM_SHOW:
    return Object.assign(
      {},
      state,
      {isPlaylistFormDisplayed: !state.isPlaylistFormDisplayed}
    );
    default:
    return state;
  }
};
export default uiReducer;
