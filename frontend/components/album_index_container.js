import { connect } from "react-redux";
import AlbumIndex from "./album_index";
import _ from "lodash";

const mapStateToProps = (state, ownProps) => {
  let albums = ownProps.albums || Object.values(state.entities.albums);
  return {
    albums
  };
};

export default connect(mapStateToProps, null)(AlbumIndex);
