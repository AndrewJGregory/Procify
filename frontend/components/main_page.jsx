import React from 'react';
import InnerCollectionContainer from './inner_collection_container';
import SidebarContainer from './sidebar_container';
import PlayingSongContainer from './playing_song_container';
import BrowseContainer from './browse_container';
import SearchContainer from './search_container';

class MainPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { displayed: false };
  }


  componentWillReceiveProps(nextProps) {
    if (nextProps.isSuccessMsgDisplayed) {
      this.setState({displayed: true});
    } 
  }

  render() {
    let primaryComponent = null;

    switch (this.props.match.params.category) {
      case 'browse':
      primaryComponent = <BrowseContainer />;
      break;
      case 'collection':
      case 'settings':
      case 'user':
      primaryComponent = <InnerCollectionContainer />;
      break;
      case 'search':
      primaryComponent = <SearchContainer />;
      break;
    }

    let successMsg = null;
    if ((this.props.isSuccessMsgDisplayed || this.props.successMsgClass === 'fadeOutUp') && this.state.displayed) {
      successMsg = <div className={`animated ${this.props.successMsgClass} add-song-success-msg`}>
        <i className="fa fa-check" aria-hidden="true"></i>
        Track was added to your playlist
      </div>;
      this.state.displayed = true;
      if (this.props.successMsgClass === 'slideInDown' && this.props.isSuccessMsgDisplayed) {
        window.setTimeout(() => {
          this.props.toggleSuccessMsg();
        }, 1000);
      }
    }

    return (
      <main id="main-page"
        className={this.props.match.params.type}>
        {successMsg}
        {primaryComponent}
        <SidebarContainer />
        <PlayingSongContainer />
      </main>
    );
  }
}

export default MainPage;
