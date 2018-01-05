import React from 'react';
import { Route } from 'react-router-dom';
import GreetingContainer from './greeting_container';
import {LoginFormContainer, SignupFormContainer} from './session_form_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import MainPageContainer from './main_page_container';

const App = () => (
  <main id='app'>
    <Route exact path='/' component={GreetingContainer} />

    <ProtectedRoute path='/collection/:type' component={MainPageContainer} />
    <AuthRoute path='/login' component={LoginFormContainer} />
    <AuthRoute path='/signup' component={SignupFormContainer} />
  </main>
);

export default App;
