import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { createNewPlaylist } from "../actions/playlist_actions";
import { swapPlaylistFormShow } from "../actions/ui_actions";
import NewPlaylistForm from "./new_playlist_form";

const mapStateToProps = state => {
  return {
    isAddSongFormDisplayed: state.ui.isAddSongFormDisplayed
  };
};

const mapDispatchToProps = dispatch => {
  return {
    createNewPlaylist: playlist => dispatch(createNewPlaylist(playlist)),
    swapPlaylistFormShow: () => dispatch(swapPlaylistFormShow())
  };
};
export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(NewPlaylistForm)
);
