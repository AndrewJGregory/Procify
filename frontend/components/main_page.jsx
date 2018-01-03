import React from 'react';
import InnerCollection from './inner_collection';
import Sidebar from './sidebar';
import PlayingSong from './playing_song';

const MainPage = ({ username, type, logout }) => {
  return (
    <main id="main-page">
      <InnerCollection />
      <Sidebar />
      <PlayingSong />
      <p>
        Welcome, {username} to the main page!
        You're looking at your {type}.
      </p>
      <button onClick={() => logout()}>Logout</button>
    </main>
  );
};

export default MainPage;
