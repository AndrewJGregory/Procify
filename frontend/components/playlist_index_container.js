import { connect } from "react-redux";
import PlaylistIndex from "./playlist_index";

const mapStateToProps = state => {
  const playlists = Object.values(state.entities.playlists).filter(
    playlist => playlist.user_id === state.session.currentUser.id
  );
  return { playlists };
};

export default connect(mapStateToProps, null)(PlaylistIndex);
