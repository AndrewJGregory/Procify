import { connect } from 'react-redux';
import Navbar from './navbar';
import NewPlaylistForm from './new_playlist_form';
import { swapPlaylistFormShow } from '../actions/playlist_actions';

const mapStateToProps = state => {
  return {
    isPlaylistFormDisplayed: state.ui.isPlaylistFormDisplayed
  };
};

const mapDispatchToProps = dispatch => {
  return {
    swapPlaylistFormShow: () => dispatch(swapPlaylistFormShow()),
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
