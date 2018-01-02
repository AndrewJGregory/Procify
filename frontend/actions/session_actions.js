import * as SessionApiUtil from '../util/session_api_util';
export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';

export const receiveCurrentUser = currentUser => {
  return {
    type: RECEIVE_CURRENT_USER,
    currentUser
  };
};

export const receiveErrors = errors => {
  return {
    type: RECEIVE_ERRORS,
    errors
  };
};

export const login = user => dispatch => {
  return SessionApiUtil.login(user).then(currentUser => {
    return dispatch(receiveCurrentUser(currentUser));
  }, (errors) => _handleErrors(dispatch, errors));
};

export const signup = user => dispatch => {
  return SessionApiUtil.signup(user).then(currentUser => {
    return dispatch(receiveCurrentUser(currentUser));
  }, (errors) => _handleErrors(dispatch, errors));
};

export const logout = () => dispatch => {
  return SessionApiUtil.logout().then(res => {
    return dispatch(receiveCurrentUser(null));
  }, (errors) => _handleErrors(dispatch, errors));
};

const _handleErrors = (dispatch, errors) => (
  dispatch(receiveErrors(errors.responseJSON))
);
