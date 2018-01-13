import { connect } from 'react-redux';
import Navbar from './navbar';
import NewPlaylistForm from './new_playlist_form';
import { createNewPlaylist } from '../actions/playlist_actions';
import { withRouter } from 'react-router-dom';
import { swapPlaylistFormShow } from '../actions/ui_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    currentUserId: state.session.currentUser.id,
    isPlaylistFormDisplayed: state.ui.isPlaylistFormDisplayed,
    type: ownProps.match.params.type
  };
};

const mapDispatchToProps = dispatch => {
  return {
    swapPlaylistFormShow: () => dispatch(swapPlaylistFormShow()),
    createNewPlaylist: playlist => dispatch(createNewPlaylist(playlist))
  };
};

export const NavBarContainer =
withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Navbar));

export const NewPlaylistFormContainer =
  withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
  )(NewPlaylistForm));
