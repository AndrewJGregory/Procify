import { connect } from "react-redux";
import AddSongForm from "./add_song_form";
import { swapAddSongFormShow, toggleDropdownMenu } from "../actions/ui_actions";
import { fetchCurrentUsersPlaylists } from "../actions/playlist_actions";

const mapDispatchToProps = dispatch => {
  return {
    swapAddSongFormShow: () => dispatch(swapAddSongFormShow()),
    fetchCurrentUsersPlaylists: userId =>
      dispatch(fetchCurrentUsersPlaylists(userId)),
    toggleDropdownMenu: () => dispatch(toggleDropdownMenu())
  };
};

export default connect(
  null,
  mapDispatchToProps
)(AddSongForm);
