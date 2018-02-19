import React from "react";
import NavbarWithNewPlaylistBtn from "./navbar_with_new_playlist_btn";
import * as innerCollectionUtil from "../util/inner_collection_util";
import AddSongFormContainer from "./add_song_form_container";
import NewPlaylistFormContainer from "./new_playlist_form_container";

class InnerCollection extends React.Component {
  componentDidMount() {
    if (innerCollectionUtil.shouldFetchInfo(this.props)) {
      const id = innerCollectionUtil.switchOnType(this.props, {}, {}, "id");
      this.props.fetchAction(id);
    }
  }

  componentWillReceiveProps(nextProps) {
    if (
      nextProps.location.pathname !== this.props.location.pathname &&
      innerCollectionUtil.shouldFetchInfo(nextProps)
    ) {
      const id = innerCollectionUtil.switchOnType(nextProps, {}, {}, "id");
      nextProps.fetchAction(id);
    }
  }

  render() {
    let navbarWithNewPlaylistBtn = innerCollectionUtil.isNavbarDisplayed(
      this.props.match.params
    ) ? (
      <NavbarWithNewPlaylistBtn />
    ) : null;

    const addSongForm = this.props.isAddSongFormDisplayed ? (
      <AddSongFormContainer />
    ) : null;

    const newPlaylistForm = this.props.isPlaylistFormDisplayed ? (
      <NewPlaylistFormContainer />
    ) : null;

    return (
      <section className="main-interior">
        {addSongForm}
        {newPlaylistForm}
        {navbarWithNewPlaylistBtn}
        <this.props.component shouldBtnBeDisplayed={true} />
      </section>
    );
  }
}

export default InnerCollection;
