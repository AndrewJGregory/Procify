import { connect } from 'react-redux';
import AlbumShow from './album_show';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => {
  const albumId = parseInt(ownProps.match.params.typeId);
  let album = state.entities.albums[albumId];
  let songs = [];
  if (album && album.song_ids) {
    songs = album.song_ids.map(songId => {
      return state.entities.songs[songId];
    });
  }
  return { songs, album };
};

export default withRouter(connect(
  mapStateToProps,
  null
)(AlbumShow));
