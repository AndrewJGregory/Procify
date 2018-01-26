import React from 'react';
import NavbarContainer from './navbar_container';
import * as innerCollectionUtil from '../util/inner_collection_util';
import AddSongFormContainer from './add_song_form_container';
import NewPlaylistFormContainer from './new_playlist_form_container';

class InnerCollection extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
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
        nextProps, {}, {}, 'id'
      );
      nextProps.fetchAction(id);
    }
  }

  render() {
    let navBar =
    innerCollectionUtil.isNavbarDisplayed(this.props.match.params) ?
    <NavbarContainer /> :
      null;

      const addSongForm = (
        this.props.isAddSongFormDisplayed ?
        <AddSongFormContainer /> :
          null
        );

        const newPlaylistForm = (
          this.props.isPlaylistFormDisplayed ?
          <NewPlaylistFormContainer /> :
            null
          );

          return (
            <section className='main-interior'>
              {addSongForm}
              {newPlaylistForm}
              {navBar}
              <this.props.component />
            </section>
          );
        }
      }

      export default InnerCollection;
