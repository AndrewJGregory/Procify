import React from 'react';
import { Route } from 'react-router-dom';
import GreetingContainer from './greeting_container';
import SessionFormContainer from './session_form_container';

const App = () => (
  <main id='app'>
    <header>
      <GreetingContainer />
    </header>
    <Route path='/login' component={SessionFormContainer} />
    <Route path='/signup' component={SessionFormContainer} />
  </main>
);

export default App;
