import React from 'react';
import InnerCollectionContainer from './inner_collection_container';
import SidebarContainer from './sidebar_container';
import PlayingSong from './playing_song';

const MainPage = ({ username, type, logout }) => {
  return (
    <main id="main-page">
      <InnerCollectionContainer />
      <SidebarContainer />
      <PlayingSong />
    </main>
  );
};

export default MainPage;
