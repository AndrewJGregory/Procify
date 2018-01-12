import { connect } from 'react-redux';
import ArtistIndex from './artist_index';

const mapStateToProps = state => {
  return {
    artists: Object.values(state.entities.artists)
  };
};

export default connect(
  mapStateToProps,
  null
)(ArtistIndex);
