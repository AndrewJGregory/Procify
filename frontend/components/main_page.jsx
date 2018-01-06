import React from 'react';
import InnerCollectionContainer from './inner_collection_container';
import Sidebar from './sidebar';
import PlayingSong from './playing_song';

const MainPage = ({ username, type, logout }) => {
  return (
    <main id="main-page">
      <InnerCollectionContainer />
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
