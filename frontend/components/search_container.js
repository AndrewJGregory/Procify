import { connect } from 'react-redux';
import Search from './search';

const mapStateToProps = state => {
  const { albums, artists, songs, playlists } = state.search;
  return {
    albums,
    artists,
    songs,
    playlists
  };
};

const mapDispatchToProps = dispatch => {
  return {

  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
