import React from "react";
import { withRouter } from "react-router-dom";
import * as navbarUtil from "../util/navbar_util.jsx";
import shortid from "shortid";
import NewPlaylistFormBtnContainer from "./new_playlist_form_btn_container";
import Navbar from "./navbar";

class NavbarWithNewPlaylistBtn extends React.Component {
  shouldComponentUpdate(nextProps, nextState) {
    return this.props.match.params.type !== nextProps.match.params.type;
  }

  render() {
    const { category, type } = this.props.match.params;
    const navbarWords = ["playlists", "tracks", "albums", "artists"];

    return (
      <section className="nav-bar">
        <div className="nav-bar-ul-container">
          <div className="new-playlist-btn-container">
            <NewPlaylistFormBtnContainer />
          </div>
          <Navbar
            type={type}
            category={category}
            navbarWords={navbarWords}
            query=""
          />
        </div>
      </section>
    );
  }
}

export default withRouter(NavbarWithNewPlaylistBtn);
