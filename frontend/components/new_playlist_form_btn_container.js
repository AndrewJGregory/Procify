import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { swapPlaylistFormShow } from "../actions/ui_actions";
import NewPlaylistFormBtn from "./new_playlist_form_btn";

const mapStateToProps = (state, ownProps) => {
  return {
    isPlaylistFormDisplayed: state.ui.isPlaylistFormDisplayed
  };
};

const mapDispatchToProps = dispatch => {
  return {
    swapPlaylistFormShow: () => dispatch(swapPlaylistFormShow())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewPlaylistFormBtn);
