import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import * as sessionActions from './actions/session_actions';

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  const store = configureStore();
  // TESTING START
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.login = sessionActions.login;
  window.signup = sessionActions.signup;
  window.logout = sessionActions.logout;
  // TESTING END
  ReactDOM.render(<h1>Procify!</h1>, root);
});
