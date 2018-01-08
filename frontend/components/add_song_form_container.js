import { connect } from 'react-redux';
import AddSongForm from './add_song_form';
import { swapAddSongFormShow } from '../actions/song_actions';
import { fetchCurrentUsersPlaylists } from '../actions/playlist_actions';

const mapStateToProps = state => {
  const currentUserId = state.session.currentUser.id;
  const playlists = Object.values(state.entities.playlists).filter(playlist => (
    playlist.user_id === currentUserId
  ));
  return {
    currentUserId, playlists
  };
};

const mapDispatchToProps = dispatch => {
  return {
    swapAddSongFormShow: () => dispatch(swapAddSongFormShow()),
    fetchCurrentUsersPlaylists: userId => dispatch(fetchCurrentUsersPlaylists(userId))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddSongForm);
