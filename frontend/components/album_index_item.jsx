import React from 'react';

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
        <h4 className='album-info album-title'>
          {this.props.album.title}
        </h4>
        <h4 className='album-info'>
          {this.props.artistName}
        </h4>
      </li>
    );
  }
}

export default AlbumIndexItem;
