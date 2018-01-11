import React from 'react';
import {NavBarContainer} from './playlist_form_container';
import * as innerCollectionUtil from '../util/inner_collection_util';
import AddSongFormContainer from './add_song_form_container';

class InnerCollection extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    if (innerCollectionUtil.shouldFetchInfo(this.props)) {
      const id = innerCollectionUtil.switchOnType(
        this.props, {}, {}, 'id'
      );
      this.props.fetchAction(id);
    }
  }

  componentWillReceiveProps(nextProps) {
    if ((nextProps.location.pathname !== this.props.location.pathname)
    && (innerCollectionUtil.shouldFetchInfo(nextProps)))
    {
      const id = innerCollectionUtil.switchOnType(
        nextProps, {}, {}, 'id');
        nextProps.fetchAction(id);
      }
    }
    render() {
      let component = null;
      let navBar = <NavBarContainer />;

      if (this.props.component) {
        component = <this.props.component
          playlists={this.props.playlists}
          songs={this.props.songs}
          currentUserId={this.props.currentUserId}
          albums={this.props.albums}
          artists={this.props.artists}
          />;
      }
      if (this.props.match.params.category === 'settings') {
        navBar = null;
      }

      let form = null;
      if (this.props.isAddSongFormDisplayed) {
        form = <AddSongFormContainer />;
      }

      return (
        <section className='main-interior'>
          {form}
          {navBar}
          {component}
        </section>
      );
    }
  }

  export default InnerCollection;
