import React from 'react';
import InnerCollectionContainer from './inner_collection_container';
import SidebarContainer from './sidebar_container';
import PlayingSongContainer from './playing_song_container';

const MainPage = (props) => {
  return (
    <main id="main-page"
      className={props.match.params.type}>
      <InnerCollectionContainer />
      <SidebarContainer />
      <PlayingSongContainer />
    </main>
  );
};

export default MainPage;
