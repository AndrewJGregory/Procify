import React from 'react';
import { Route } from 'react-router-dom';
import GreetingContainer from './greeting_container';

const App = () => (
  <main id='app'>
    <header>
      Procify from a react component!
      <GreetingContainer />
    </header>
  </main>
);

export default App;
