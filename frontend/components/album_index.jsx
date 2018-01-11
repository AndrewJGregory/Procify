import React from 'react';
import AlbumIndexItem from './album_index_item';

class AlbumIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const albums = this.props.albums.map(album => {
      return <AlbumIndexItem key={album.id} album={album} />;
    });
    return (
      <section className='album-index'>
        <ul>
          {albums}
        </ul>
      </section>
    );
  }
}

export default AlbumIndex;
