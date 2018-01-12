import React from 'react';
import AlbumIndexItemContainer from './album_index_item_container';

class AlbumIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const albums = this.props.albums.map(album => {
      return <AlbumIndexItemContainer key={album.id} album={album} />;
    });
    return (
      <section className='square-index-content'>
        <ul>
          {albums}
        </ul>
      </section>
    );
  }
}

export default AlbumIndex;
