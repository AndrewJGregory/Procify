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
  }, (errors) => {
    return dispatch(receiveErrors(errors.responseJSON));
  });
};

export const signup = user => dispatch => {
  return SessionApiUtil.signup(user).then(currentUser => {
    return dispatch(receiveCurrentUser(currentUser));
  }, (errors) => {
    return dispatch(receiveErrors(errors.responseJSON));
  });
};

export const logout = () => dispatch => {
  return SessionApiUtil.logout().then(res => {
    return dispatch(receiveCurrentUser(null));
  }, (errors) => {
    return dispatch(receiveErrors(errors.responseJSON));
  });
};
