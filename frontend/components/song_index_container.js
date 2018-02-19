import { connect } from "react-redux";
import SongIndex from "./song_index";

const mapStateToProps = state => {
  return {
    songs: Object.values(state.entities.songs)
  };
};

export default connect(mapStateToProps, null)(SongIndex);
