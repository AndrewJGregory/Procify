import { connect } from 'react-redux';
import AlbumIndex from './album_index';

const mapStateToProps = state => {
  return {
    albums: Object.values(state.entities.albums)
  };
};

export default connect(
  mapStateToProps,
  null
)(AlbumIndex);
