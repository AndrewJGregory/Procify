import { connect } from "react-redux";
import SearchResults from "./search_results";
import { withRouter } from "react-router-dom";

const mapStateToProps = (state, ownProps) => {
  let { albums, artists, songs, playlists } = state.search;
  albums = Object.values(albums);
  artists = Object.values(artists);
  songs = Object.values(songs);
  playlists = Object.values(playlists);

  return {
    albums,
    artists,
    songs,
    playlists,
    params: ownProps.match.params
  };
};

export default withRouter(connect(mapStateToProps, null)(SearchResults));
