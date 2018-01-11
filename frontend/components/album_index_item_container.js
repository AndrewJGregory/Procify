import { connect } from 'react-redux';
import AlbumIndexItem from './album_index_item';

const mapStateToProps = (state, ownProps) => {
  const artistName = state.entities.artists[ownProps.album.artist_id].name;
  return { artistName };
};

export default connect(
  mapStateToProps,
  null
)(AlbumIndexItem);
