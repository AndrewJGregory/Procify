import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import * as sessionActions from './actions/session_actions';

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  const store = configureStore();
  window.login = sessionActions.login;
  window.signup = sessionActions.signup;
  window.logout = sessionActions.logout;
  window.dispatch = store.dispatch;
  ReactDOM.render(<Root store={store} />, root);
});
