import React from 'react';
import InnerCollectionContainer from './inner_collection_container';
import SidebarContainer from './sidebar_container';
import PlayingSongContainer from './playing_song_container';
import BrowseContainer from './browse_container';
import SearchContainer from './search_container';

const MainPage = (props) => {
  let primaryComponent = null;
  switch (props.match.params.category) {
    case 'browse':
    primaryComponent = <BrowseContainer />;
    break;
    case 'collection':
    case 'settings':
    primaryComponent = <InnerCollectionContainer />;
    break;
    case 'search':
    primaryComponent = <SearchContainer />;
    break;
  }

  return (
    <main id="main-page"
      className={props.match.params.type}>
      {primaryComponent}
      <SidebarContainer />
      <PlayingSongContainer />
    </main>
  );
};

export default MainPage;
