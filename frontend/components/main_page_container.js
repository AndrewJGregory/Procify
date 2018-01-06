import { connect } from 'react-redux';
import MainPage from './main_page';
import { logout } from '../actions/session_actions.js';

const mapStateToProps = (state, ownProps) => {
  return {
    username: state.session.currentUser.username,
    type: ownProps.match.params.type,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    logout: () => dispatch(logout())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainPage);
