import React from 'react';
import { Route } from 'react-router-dom';
import GreetingContainer from './greeting_container';
import SessionFormContainer from './session_form_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () => (
  <main id='app'>
    <header>
      <Route exact path='/' component={GreetingContainer} />
    </header>
    <AuthRoute path='/login' component={SessionFormContainer} />
    <AuthRoute path='/signup' component={SessionFormContainer} />
  </main>
);

export default App;
