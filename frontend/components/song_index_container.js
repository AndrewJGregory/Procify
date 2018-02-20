import { connect } from "react-redux";
import SongIndex from "./song_index";
import { setQueue } from "../actions/playing_song_actions";

const mapStateToProps = (state, ownProps) => {
  const songs = ownProps.songs || Object.values(state.entities.songs);
  return {
    songs
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setQueue: songs => dispatch(setQueue(songs))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SongIndex);
