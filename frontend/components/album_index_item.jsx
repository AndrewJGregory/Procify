import React from 'react';

class AlbumIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <li className='album-item'>
        <img src={`${this.props.album.img_url}`}/>
        {this.props.album.title}
      </li>
    );
  }
}
export default AlbumIndexItem;
