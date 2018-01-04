import { connect } from 'react-redux';
import Navbar from './navbar';
import NewPlaylistForm from './new_playlist_form';
import { swapPlaylistFormShow, createNewPlaylist } from '../actions/playlist_actions';

const mapStateToProps = state => {
  return {
    isPlaylistFormDisplayed: state.ui.isPlaylistFormDisplayed
  };
};

const mapDispatchToProps = dispatch => {
  return {
    swapPlaylistFormShow: () => dispatch(swapPlaylistFormShow()),
    createNewPlaylist: playlist => dispatch(createNewPlaylist(playlist))
  };
};

export const NavBarContainer =
connect(
  mapStateToProps,
  mapDispatchToProps
)(Navbar);

export const NewPlaylistFormContainer =
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(NewPlaylistForm);
