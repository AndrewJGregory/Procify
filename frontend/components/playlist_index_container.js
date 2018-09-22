import { connect } from "react-redux";
import PlaylistIndex from "./playlist_index";

const mapStateToProps = state => {
  const currentUserId = state.session.currentUser.id;
  const playlists = Object.values(state.entities.playlists).filter(
    playlist => playlist.user_id === currentUserId
  );
  return { currentUserId, playlists };
};

export default connect(
  mapStateToProps,
  null
)(PlaylistIndex);
