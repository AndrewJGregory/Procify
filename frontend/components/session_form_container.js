import { connect } from 'react-redux';
import LoginForm from './login_form';
import SignupForm from './signup_form';
import { login, signup } from '../actions/session_actions';
import { receiveErrors } from '../actions/session_actions';

const mapStateToProps = state => {
  return { errors: state.errors.session };
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

export const LoginFormContainer =
connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginForm);

export const SignupFormContainer =
connect(
  mapStateToProps,
  mapDispatchToProps
)(SignupForm);
