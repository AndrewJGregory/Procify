import { connect } from "react-redux";
import AlbumIndexItem from "./album_index_item";
import { withRouter } from "react-router-dom";

const mapStateToProps = (state, ownProps) => {
  let artistName = "";
  const artist = state.entities.artists[ownProps.album.artist_id];
  if (artist) {
    artistName = artist.name;
  }
  return { artistName };
};

export default withRouter(connect(mapStateToProps, null)(AlbumIndexItem));
