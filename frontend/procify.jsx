import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import * as sessionActions from './actions/session_actions';

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  window.login = sessionActions.login;
  window.signup = sessionActions.signup;
  window.logout = sessionActions.logout;
  let store;
  if (window.currentUser) {
    store = configureStore({session: {currentUser: window.currentUser}});
    delete window.currentUser;
  } else {
    store = configureStore();
  }
  window.dispatch = store.dispatch;
  window.getState = store.getState;
  ReactDOM.render(<Root store={store} />, root);
});
