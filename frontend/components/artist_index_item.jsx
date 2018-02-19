import React from "react";
import { withRouter } from "react-router-dom";

class ArtistIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.props.history.push(`/collection/artists/${this.props.artist.id}`);
  }

  render() {
    return (
      <li className="artist-index-item" onClick={this.handleClick}>
        <img src={`${this.props.artist.img_url}`} />
        <h4>{this.props.artist.name}</h4>
      </li>
    );
  }
}

export default withRouter(ArtistIndexItem);
