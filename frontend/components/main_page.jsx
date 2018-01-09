import React from 'react';
import InnerCollectionContainer from './inner_collection_container';
import SidebarContainer from './sidebar_container';
import PlayingSongContainer from './playing_song_container';

const MainPage = ({ username, type, logout }) => {
  return (
    <main id="main-page">
      <InnerCollectionContainer />
      <SidebarContainer />
      <PlayingSongContainer />
    </main>
  );
};

export default MainPage;
