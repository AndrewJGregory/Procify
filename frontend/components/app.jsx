import React from 'react';
import { Route, Switch } from 'react-router-dom';
import GreetingContainer from './greeting_container';
import {LoginFormContainer, SignupFormContainer} from './session_form_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import MainPageContainer from './main_page_container';
import PlaylistShowContainer from './playlist_show_container';

const App = () => (
  <main id='app'>

    <Switch>
      <ProtectedRoute path='/user/:userId/:type/:typeId' component={PlaylistShowContainer}/>
      <ProtectedRoute path='/collection/:type' component={MainPageContainer} />
      <AuthRoute path='/login' component={LoginFormContainer} />
      <AuthRoute path='/signup' component={SignupFormContainer} />
      <AuthRoute path='/' component={GreetingContainer} />
    </Switch>
  </main>
);

export default App;
