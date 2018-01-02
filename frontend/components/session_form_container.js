import { connect } from 'react-redux';
import SessionForm from './session_form';
import { login, signup } from '../actions/session_actions';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => {
  let formType = 'log in';
  debugger;
  if (ownProps.match.path === '/signup') {
    formType = 'sign up';
  }
  return { formType, };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  let submitForm = login;
  if (ownProps.match.path.includes('signup')) {
    submitForm = signup;
  }
  return {
    submitForm: user => dispatch(submitForm(user))
  };
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm));
