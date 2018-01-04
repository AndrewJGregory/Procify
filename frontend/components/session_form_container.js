import { connect } from 'react-redux';
import SessionForm from './session_form';
import { login, signup } from '../actions/session_actions';
import { withRouter } from 'react-router-dom';
import { receiveErrors } from '../actions/session_actions';

const mapStateToProps = (state, ownProps) => {
  let formType = 'log in';
  if (ownProps.match.path === '/signup') {
    formType = 'sign up';
  }

  const errors = {
    username: state.errors.session.username,
    password: state.errors.session.password,
    email: state.errors.session.email,
    credentials: state.errors.session.credentials
  };

  return { formType, errors };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  let submitForm = login;
  if (ownProps.match.path.includes('signup')) {
    submitForm = signup;
  }
  return {
    submitForm: user => dispatch(submitForm(user)),
    clearErrors: () => dispatch(receiveErrors({}))
  };
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm));
