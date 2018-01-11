import { connect } from 'react-redux';
import ArtistShow from './artist_show';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => {
  const artistId = parseInt(ownProps.match.params.typeId);
  const storeSongs = Object.values(state.entities.songs).filter(song => {
    return song.artist_id === artistId;
  });
  const storeAlbums = Object.values(state.entities.albums).filter(album => {
    return album.artist_id === artistId;
  });
  return {
    storeSongs, storeAlbums
  };
};

export default withRouter(connect(
  mapStateToProps,
  null
)(ArtistShow));
