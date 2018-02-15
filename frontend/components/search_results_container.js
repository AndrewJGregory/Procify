import { connect } from 'react-redux';
import SearchResults from './search_results';

const mapStateToProps = state => {
  let { albums, artists, songs, playlists } = state.search;
  albums = Object.values(albums);
  artists = Object.values(artists);
  songs = Object.values(songs);
  playlists = Object.values(playlists);
  return {
    albums,
    artists,
    songs,
    playlists
  };
};

export default connect(
  mapStateToProps,
  null
)(SearchResults);
