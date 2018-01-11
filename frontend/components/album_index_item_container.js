import { connect } from 'react-redux';
import AlbumIndexItem from './album_index_item';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => {
  const artistName = state.entities.artists[ownProps.album.artist_id].name;
  return { artistName };
};

export default withRouter(connect(
  mapStateToProps,
  null
)(AlbumIndexItem));
