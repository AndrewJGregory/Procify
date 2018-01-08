import { connect } from 'react-redux';
import PlaylistShow from './playlist_show';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => {
  const playlistId = ownProps.match.params.typeId;
  const songs = Object.values(state.entities.songs).filter(song => {
    return song.playlist_ids.includes(parseInt(playlistId));
  });
  
  return { songs, playlistId };
};

export default withRouter(connect(
  mapStateToProps,
  null
)(PlaylistShow));
