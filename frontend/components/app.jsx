import React from 'react';
import { Route, Switch } from 'react-router-dom';
import GreetingContainer from './greeting_container';
import {LoginFormContainer, SignupFormContainer} from './session_form_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import MainPage from './main_page';
import PlaylistShowContainer from './playlist_show_container';

const App = () => (
  <main id='app'>
    <Switch>
      <ProtectedRoute path='/collection/:type'
        component={MainPage} />
      <ProtectedRoute path='/settings/:type'
        component={MainPage}/>
      <ProtectedRoute path='/user/:userId/:type/:typeId'
        component={MainPage} />
      <AuthRoute path='/login' component={LoginFormContainer} />
      <AuthRoute path='/signup' component={SignupFormContainer} />
      <AuthRoute path='/' component={GreetingContainer} />
    </Switch>
  </main>
);

export default App;
