import React from 'react';
import { withRouter } from 'react-router-dom';

class AlbumIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.props.history.push(`/collection/albums/${this.props.album.id}`);
  }

  render() {
    return (
      <li className='album-item'
        onClick={this.handleClick}>
        <img src={`${this.props.album.img_url}`}/>
        {this.props.album.title}
      </li>
    );
  }
}
export default withRouter(AlbumIndexItem);
